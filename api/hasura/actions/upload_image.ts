import type { VercelRequest, VercelResponse } from '@vercel/node';
import aws from 'aws-sdk';

import { gql } from '../../../api-lib/Gql';
import {
  composeHasuraActionRequestBody,
  uploadImageSchemaInput,
} from '../../../src/lib/zod';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const {
    input: { object: input },
    session_variables: sessionVariables,
  } = composeHasuraActionRequestBody(uploadImageSchemaInput).parse(req.body);

  // admin can't update profile because they don't have a userId
  if (sessionVariables.hasuraRole == 'admin') {
    return res.status(401).json({
      error: '401',
      message: 'upload_image not authorized for admin role, only user role',
    });
  }

  try {
    console.log('----image upload----');
    console.log(input.image_data);

    const imageBytes = _base64ToArrayBuffer(input.image_data);
    console.log(imageBytes.byteLength);

    const s3 = new aws.S3({
      accessKeyId: 'nothing',
      secretAccessKey: 'bro',
      endpoint: 'http://s3.localhost.localstack.cloud:4566',
    });

    const file_id = 'cat.jpg';
    // Setting up S3 upload parameters
    const params = {
      Bucket: 'coordinape',
      Key: file_id, // File name you want to save as in S3
      Body: imageBytes,
    };

    // Uploading files to the bucket
    try {
      await s3.upload(params).promise();
    } catch (err: any) {
      // TODO: how does error typing work
      return res.status(500).json({
        error: '500',
        message: err.message || 'Unexpected error uploading file',
      });
    }

    const mutationResult = await gql.q('mutation')({
      update_profiles_by_pk: [
        {
          set: { avatar: file_id },
          pk_columns: { id: sessionVariables.hasuraProfileId },
        },
        { id: true },
      ],
    });
    return res.status(200).json(mutationResult.update_profiles_by_pk);
  } catch (e) {
    return res.status(401).json({
      error: '401',
      message: e.message || 'Unexpected error',
    });
  }
}

function _base64ToArrayBuffer(base64: string) {
  const binary_string = window.atob(base64);
  const len = binary_string.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

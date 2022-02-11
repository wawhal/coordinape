import type { VercelRequest, VercelResponse } from '@vercel/node';
import aws from 'aws-sdk';
import sharp from 'sharp';

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

    const imageBytes = new Buffer(input.image_data, 'base64');
    console.log(imageBytes.byteLength);

    const nicePic = sortOutTheImage(imageBytes);
    const s3 = new aws.S3({
      accessKeyId: 'nothing',
      secretAccessKey: 'bro',
      endpoint: 'http://s3.localhost.localstack.cloud:4566',
    });

    const file_id = 'cat22.jpg';
    // Setting up S3 upload parameters
    const params = {
      Bucket: 'coordinape',
      Key: file_id, // File name you want to save as in S3
      Body: nicePic,
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

    // 80% image quality compression,
    // append current timestamp to filename,
    // delete previous image if exists and upload modified image to s3

    const mutationResult = await gql.q('mutation')({
      update_profiles_by_pk: [
        {
          _set: { avatar: file_id },
          pk_columns: { id: sessionVariables.hasuraProfileId },
        },
        {
          id: true,
          avatar: true,
          address: true,
        },
      ],
    });
    if (mutationResult.update_profiles_by_pk) {
      return res.status(200).json({
        profile_id: mutationResult.update_profiles_by_pk.id,
        profile: mutationResult.update_profiles_by_pk,
      });
    }
  } catch (e) {
    return res.status(401).json({
      error: '401',
      message: e.message || 'Unexpected error',
    });
  }
}

async function sortOutTheImage(imageBytes: Buffer) {
  const img = sharp(imageBytes);
  return await img
    .resize({
      fit: 'cover',
      width: 240, // this is so small!
      height: 240,
    })
    .jpeg({
      quality: 80,
    })
    .toBuffer();
}

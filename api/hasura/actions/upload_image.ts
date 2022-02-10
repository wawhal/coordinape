import type { VercelRequest, VercelResponse } from '@vercel/node';
import aws from 'aws-sdk';
import { z } from 'zod';

import { gql } from '../../../api-lib/Gql';
import { uploadImageSchemaInput } from '../../../src/lib/zod';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  let input;
  try {
    input = await uploadImageSchemaInput.parseAsync(input);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(422).json({
        extensions: err.issues,
        message: 'Invalid input',
        code: '422',
      });
    }
  }

  try {
    if (input) {
      console.log('----image upload----');
      console.log(input.image_data);

      const imageBytes = _base64ToArrayBuffer(input.image_data);
      console.log(imageBytes.byteLength);

      const s3 = new aws.S3({
        accessKeyId: 'nothing',
        secretAccessKey: 'bro',
      });

      // Setting up S3 upload parameters
      const params = {
        Bucket: 'coordinape',
        Key: 'cat.jpg', // File name you want to save as in S3
        Body: imageBytes,
      };

      // Uploading files to the bucket
      try {
        await s3.upload(params).promise();
      } catch (e) {
        // TODO: how does error typing work
        return res.status(500).json({
          error: '500',
          message: e.message || 'Unexpected error uploading file',
        });
      }
    } else {
      // TODO: not sure why this or create_circle are written w/ this if
      return res.status(400).json({
        error: '400',
        message: 'invalid input',
      });
    }

    //TODO: is it better to write pure GQL vs this object notation stuff?
    const ret = await gql.q('mutation')({
      update_profiles: [
        {
          // TODO: this 504 is harcoded, we need the real userID
          where: { id: { _eq: 504 } },
          _set: { avatar: 'sup2' },
        },
        {
          returning: {
            // TODO: what do i put for returning here
            avatar: true,
          },
        },
      ],
    });
    return res.status(200).json(ret);
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

import type { VercelRequest, VercelResponse } from '@vercel/node';
import aws from 'aws-sdk';
import sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';

import { gql } from '../../../api-lib/Gql';
import {
  composeHasuraActionRequestBodyWithSession,
  HasuraUserSessionVariables,
  updateProfileAvatarInput,
} from '../../../src/lib/zod';

// TODO: this probably needs to be bigger cuz base64 is bigger and we limit the true image size to 10mb on FE
const MAX_IMAGE_BYTES_LENGTH = 10 * 1024 * 1024; // 10MB

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // parse the input
  const {
    input: { object: input },
    session_variables: sessionVariables,
  } = composeHasuraActionRequestBodyWithSession(
    updateProfileAvatarInput,
    HasuraUserSessionVariables
  ).parse(req.body);

  try {
    // base64 decode the provided image data
    const imageBytes = Buffer.from(input.image_data_base64, 'base64');

    // file size check
    if (imageBytes.byteLength > MAX_IMAGE_BYTES_LENGTH) {
      return res.status(400).json({
        message: `image size is larger than maximum allowed: ${imageBytes.byteLength}/${MAX_IMAGE_BYTES_LENGTH}`,
        code: '400',
      });
    }

    // Figure out if there was a previous avatar, because we'll need to delete it
    const { profiles_by_pk } = await gql.q('query')({
      profiles_by_pk: [
        {
          id: sessionVariables.hasuraProfileId,
        },
        {
          avatar: true,
        },
      ],
    });

    let previousAvatar: string | undefined = undefined;
    if (profiles_by_pk) {
      previousAvatar = profiles_by_pk.avatar;
    }

    const avatarJpeg = await cropAndJpegAvatar(imageBytes);
    const fileName = uuidv4() + '.jpg';

    // TODO: move this into a lib, add the env vars to .env/example
    const s3 = new aws.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'invalid',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'invalid',
      endpoint: process.env.AWS_ENDPOINT,
    });

    // Setting up S3 upload parameters
    const params = {
      Bucket: 'coordinape', // TODO: use env var
      Key: fileName, // File name you want to save as in S3
      Body: avatarJpeg,
    };

    // Uploading files to the bucket
    try {
      await s3.upload(params).promise();
    } catch (err: any) {
      // TODO: how does error typing work
      return res.status(500).json({
        error: '500',
        message: err.message
          ? 'error uploading to s3: ' + err.message
          : 'Unexpected error uploading file',
      });
    }

    // 80% image quality compression,
    // append current timestamp to filename,
    // delete previous image if exists and upload modified image to s3

    const mutationResult = await gql.q('mutation')({
      update_profiles_by_pk: [
        {
          _set: { avatar: fileName },
          pk_columns: { id: sessionVariables.hasuraProfileId },
        },
        {
          id: true,
          avatar: true,
          address: true,
        },
      ],
    });
    console.log(
      'did the avatar mutation for' + sessionVariables.hasuraProfileId
    );
    console.log(mutationResult);
    if (mutationResult.update_profiles_by_pk) {
      if (previousAvatar) {
        //delete the previous file from s3
        await s3
          .deleteObject({
            Bucket: 'coordinape', // TODO: use the env var
            Key: previousAvatar,
          })
          .promise();
        console.log('deleted previous!');
      }
      return res.status(200).json({
        profile_id: mutationResult.update_profiles_by_pk.id,
        profile: mutationResult.update_profiles_by_pk,
      });
    }
  } catch (e: any) {
    return res.status(401).json({
      error: '401',
      message: e.message || 'Unexpected error',
    });
  }
}

async function cropAndJpegAvatar(imageBytes: Buffer) {
  const img = sharp(imageBytes);
  return img
    .resize({
      fit: 'cover',
      width: 240, // TODO: this is so small! but its what previous impl did
      height: 240,
    })
    .jpeg({
      quality: 80,
    })
    .toBuffer();
}

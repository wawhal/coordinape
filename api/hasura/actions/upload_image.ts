import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

// import { gql } from '../../../api-lib/Gql';
import { ValueTypes } from '../../../src/lib/gql/zeusHasuraAdmin';
import { uploadImageSchemaInput } from '../../../src/lib/zod';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const input: ValueTypes['upload_image_input'] = req.body.input.object;
  try {
    await uploadImageSchemaInput.parseAsync(input);
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
    if (input.image_data) {
      console.log('----image upload----');
      console.log(input.user_name);
      console.log(input.image_data);
      // TODO: how the heck does auth work?
      // TODO: s3 stuff here
      // const isAdmin = await gql.checkAddressAdminInOrg(
      //   input.address,
      //   input.protocol_id
      // );
      // if (!isAdmin) {
      //   return res.status(422).json({
      //     extensions: [],
      //     message: 'Address is not an admin of any circles under this protocol',
      //     code: '422',
      //   });
      // }
    } else {
      // TODO: not sure why this or create_circle are written w/ this if
    }

    // TODO: do some GQL insert here
    // TODO: this valueTypes thing does not work
    const ret: ValueTypes['upload_image_response'] = {
      // TODO: the typing doesnt seem to work here, it thinks every field in responses is booleans
      url: 'https://cdn.jream.gallery/projects/eponym/gen1/3265.jpg',
    };
    return res.status(200).json(ret);
  } catch (e) {
    return res.status(401).json({
      error: '401',
      message: e.message || 'Unexpected error',
    });
  }
}

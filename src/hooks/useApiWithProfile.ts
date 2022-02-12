/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
import { getGql } from 'lib/gql';

import { fileToBase64 } from '../lib/base64';
import { REACT_APP_HASURA_URL } from 'config/env';
import { useApiBase } from 'hooks';
import { getApiService, getAuthToken } from 'services/api';

// import { useUploadProfileAvatar } from "./gql";
import { useRecoilLoadCatch } from './useRecoilLoadCatch';

import { CreateCircleParam, PostProfileParam } from 'types';

const api = getGql(REACT_APP_HASURA_URL, () => {
  const token = getAuthToken();
  if (token) {
    return token;
  } else {
    // TODO: this sucks, just getting around the type strictness
    return '';
  }
});

export const useApiWithProfile = () => {
  const { fetchManifest } = useApiBase();

  const createCircle = useRecoilLoadCatch(
    () =>
      async (
        address: string,
        params: CreateCircleParam,
        captchaToken: string,
        uxresearchJson: string
      ) => {
        const result = await getApiService().createCircle(
          address,
          params,
          captchaToken,
          uxresearchJson
        );
        await fetchManifest();
        return result;
      },
    []
  );

  // const updateAvatarMutation = useUploadProfileAvatar();

  const updateAvatar = useRecoilLoadCatch(
    () => async (newAvatar: File) => {
      // TODO: I wanted to use hooks here but couldn't get the variables to work w/ mutation
      try {
        const image_data_base64 = await fileToBase64(newAvatar);
        console.log('base64');
        console.log(image_data_base64);
        await api.updateProfileAvatar(image_data_base64);
        // const variables = {image_data_base64};
        // await updateAvatarMutation.mutateAsync(image_data_base64);
        await fetchManifest();
      } catch (e: any) {
        console.log(e);
      }
    },
    []
  );

  const updateBackground = useRecoilLoadCatch(
    () => async (newAvatar: File) => {
      await getApiService().uploadBackground(newAvatar);
      await fetchManifest();
    },
    []
  );

  const updateMyProfile = useRecoilLoadCatch(
    () => async (params: PostProfileParam) => {
      await getApiService().updateProfile(params);
      await fetchManifest();
    },
    []
  );

  return {
    createCircle,
    updateAvatar,
    updateBackground,
    updateMyProfile,
  };
};

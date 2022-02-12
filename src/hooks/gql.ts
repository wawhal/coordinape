import {
  ValueTypes,
  GraphQLTypes,
  InputType,
  OperationOptions,
  chainOptions,
  $,
} from 'lib/gql/zeusUser';
import {
  useTypedQuery as _useTypedQuery,
  useTypedMutation as _useTypedMutation,
} from 'lib/gql/zeusUser/reactQuery';
import type { UseQueryOptions } from 'react-query';
import { UseMutationOptions } from 'react-query';

import { getAuthToken } from '../services/api';
import { REACT_APP_HASURA_URL } from 'config/env';
import { useSelectedCircle } from 'recoilState';

function useTypedQuery<
  O extends 'query_root',
  TData extends ValueTypes[O],
  TResult = InputType<GraphQLTypes[O], TData>
>(
  queryKey: string,
  query: TData | ValueTypes[O],
  options?: Omit<UseQueryOptions<TResult>, 'queryKey' | 'queryFn'>,
  zeusOptions?: OperationOptions,
  hostOptions: chainOptions[1] = {}
) {
  return _useTypedQuery(
    queryKey,
    query,
    { ...options, suspense: true },
    zeusOptions,
    REACT_APP_HASURA_URL,
    {
      ...hostOptions,
      method: 'POST',
      headers: { Authorization: 'Bearer ' + getAuthToken() },
    }
  );
}

export function useTypedMutation<
  O extends 'mutation_root',
  TData extends ValueTypes[O],
  TResult = InputType<GraphQLTypes[O], TData>
>(
  mutationKey: string | unknown[],
  mutation: TData | ValueTypes[O],
  options?: Omit<UseMutationOptions<TResult>, 'mutationKey' | 'mutationFn'>,
  zeusOptions?: OperationOptions,
  hostOptions: chainOptions[1] = {}
) {
  return _useTypedMutation(
    mutationKey,
    mutation,
    options, // suspense not an option here
    zeusOptions,
    REACT_APP_HASURA_URL,
    {
      ...hostOptions,
      method: 'POST',
      headers: { Authorization: 'Bearer ' + getAuthToken() },
    }
  );
}

export function useCurrentOrg() {
  const id = useSelectedCircle().circle.protocol_id;

  return useTypedQuery(`org-${id}`, {
    organizations_by_pk: [{ id }, { id: true, name: true }],
  }).data?.organizations_by_pk;
}

export function useCircleIdForEpoch(epochId: number) {
  return useTypedQuery(`circle-for-epoch-${epochId}`, {
    epochs_by_pk: [{ id: epochId }, { circle_id: true }],
  }).data?.epochs_by_pk?.circle_id;
}

export function useUploadProfileAvatar() {
  // TODO: i don't know what to do with this key, is it supposed to be unique?
  return useTypedMutation('update-profile-X', {
    update_profile_avatar: [
      { object: { image_data: $`image_data_base64` } },
      { profile_id: true },
    ],
  });
}

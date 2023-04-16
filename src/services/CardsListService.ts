import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, RickAndMorty } from 'types/types';

export const cardsListApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (build) => ({
    fetchCards: build.query<RickAndMorty, string>({
      query: (filter = '') => ({
        url: '/character',
        params: {
          name: filter,
        },
      }),
    }),
    fetchId: build.query<Character, string>({
      query: (filter = '') => ({
        url: `/character/${filter}`,
      }),
    }),
  }),
});

import { RickAndMorty } from './types';

export enum ActionsEnum {
  STOP_LOADING = 'STOP_LOADING',
  START_LOADING = 'START_LOADING',
  ADD_ERROR = 'ADD_ERROR',
  REMOVE_ERROR = 'REMOVE_ERROR',
  ADD_FILTER = 'ADD_FILTER',
  FETCH_DATA = 'FETCH_DATA',
  CLEAR_DATA = 'CLEAR_DATA',
}

export type CardsState = {
  cards: RickAndMorty | null;
  loading: boolean;
  filter: string;
  error: string | null;
};

export interface CardsActions {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

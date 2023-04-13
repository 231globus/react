import { createSlice } from '@reduxjs/toolkit';
import { RickAndMorty } from 'types/types';

export type CardsState = {
  cards: RickAndMorty | null;
  loading: boolean;
  filter: string;
  error: string | null;
};

const initialState: CardsState = {
  cards: null,
  loading: false,
  filter: '',
  error: null,
};

export const cardsReducer = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    fetchData(state, action) {
      state.cards = action.payload;
    },
    clearData(state) {
      state.cards = null;
    },
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
    addFilter(state, action) {
      state.filter = action.payload;
    },
    addError(state, action) {
      state.error = action.payload;
    },
    removeError(state) {
      state.error = null;
    },
  },
});

export default cardsReducer.reducer;

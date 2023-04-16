import { createSlice } from '@reduxjs/toolkit';

export type CardsState = {
  filter: string;
};

const initialState: CardsState = {
  filter: '',
};

export const cardsReducer = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export default cardsReducer.reducer;

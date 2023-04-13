import { createSlice } from '@reduxjs/toolkit';

export type modalState = {
  show: boolean;
};

const initialState: modalState = {
  show: false,
};

export const modalReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state) {
      state.show = true;
    },
    hideModal(state) {
      state.show = false;
    },
  },
});

export default modalReducer.reducer;

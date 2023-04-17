import * as toolkitRaw from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

export type modalState = {
  show: boolean;
  id: number;
};

const initialState: modalState = {
  show: false,
  id: 1,
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
    idModal(state, action) {
      state.id = action.payload;
    },
  },
});

export default modalReducer.reducer;

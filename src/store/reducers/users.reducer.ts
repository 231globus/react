import * as toolkitRaw from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;
import { User } from 'types/types';

export type UsersState = {
  users: User[];
};

const initialState: UsersState = {
  users: [],
};

export const usersReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
  },
});

export default usersReducer.reducer;

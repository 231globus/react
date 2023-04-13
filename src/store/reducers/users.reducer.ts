import { createSlice } from '@reduxjs/toolkit';
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

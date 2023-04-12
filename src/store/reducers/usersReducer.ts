import { ADD_USER, UsersAction, UsersState } from '../../types/users';

const initialState: UsersState = {
  users: [],
};

export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case ADD_USER:
      return { users: [...state.users, action.payload] };
    default:
      return state;
  }
};

import { User } from './types';

export const ADD_USER = 'ADD_USER';

export type UsersState = {
  users: User[];
};

export interface UsersAction {
  type: string;
  payload: User;
}

import { combineReducers } from 'redux';
import cardsReducer from './cards.reducer';
import modalReducer from './modal.reducer';
import usersReducer from './users.reducer';

export const rootReducer = combineReducers({
  cardsReducer,
  modalReducer,
  usersReducer,
});

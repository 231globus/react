import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import { popUpReducer } from './popUpReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
  cardsReducer,
  popup: popUpReducer,
  users: usersReducer,
});

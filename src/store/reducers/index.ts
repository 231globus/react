import { combineReducers } from 'redux';
import { CardsReducer } from './cardsReducer';
import { popUpReducer } from './popUpReducer';
import { usersReducer } from './usersReducer';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  popup: popUpReducer,
  users: usersReducer,
  cards: CardsReducer,
});

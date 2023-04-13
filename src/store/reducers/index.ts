import { combineReducers } from 'redux';
import { cardsListApi } from '../../services/CardsListService';
import cardsReducer from './cards.reducer';
import modalReducer from './modal.reducer';
import usersReducer from './users.reducer';

export const rootReducer = combineReducers({
  cardsReducer,
  modalReducer,
  usersReducer,
  [cardsListApi.reducerPath]: cardsListApi.reducer,
});

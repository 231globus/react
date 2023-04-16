import { configureStore } from '@reduxjs/toolkit';
import { cardsListApi } from '../services/CardsListService';
import { rootReducer } from './reducers';

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(cardsListApi.middleware),
  });
};

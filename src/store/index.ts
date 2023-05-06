import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { RootState } from '../types/Store';
import { rootReducer } from './reducers';

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    preloadedState,
  });
};

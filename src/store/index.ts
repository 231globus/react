import * as toolkitRaw from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { configureStore } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;
import { rootReducer } from './reducers';

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  });
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore } from 'redux';
import { rootReducer } from './reducers';

export const store = createStore(rootReducer);

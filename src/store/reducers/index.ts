import { combineReducers } from 'redux';
import { popUpReducer } from './popUpReducer';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  popup: popUpReducer,
});

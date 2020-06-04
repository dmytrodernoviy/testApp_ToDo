import { combineReducers } from 'redux';
import { RootStateType } from './types';
import { authReducer } from './auth/reducer';

export const rootReducer = combineReducers<RootStateType>({
  auth: authReducer,
});

import { combineReducers } from 'redux';
import { RootStateType } from './types';

export const rootReducer = combineReducers<RootStateType>({
  auth: () => {
    return {
      x: null,
    };
  },
});

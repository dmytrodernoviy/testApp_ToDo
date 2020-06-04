import { SignFormValuesType } from '@src/redux/auth/types';
import { SignUpRequest, SignInRequest } from '@src/redux/auth/actions';
import { store } from '@src/redux';

export const DispatcherService = {
  signUp: ({ payload }: { payload: SignFormValuesType }): void => {
    store.dispatch(SignUpRequest(payload));
  },
  signIn: ({ payload }: { payload: SignFormValuesType }): void => {
    store.dispatch(SignInRequest(payload));
  },
};

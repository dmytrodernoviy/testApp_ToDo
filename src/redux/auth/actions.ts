import {
  AuthActionsConstants,
  AuthActionsType,
  SignFormValuesType,
} from '@src/redux/auth/types';

export const SignInRequest = (
  payload: SignFormValuesType,
): AuthActionsType => ({
  type: AuthActionsConstants.SIGN_IN_REQUEST,
  payload,
});

export const SignInSuccess = (): AuthActionsType => ({
  type: AuthActionsConstants.SIGN_IN_SUCCESS,
});

export const SignInFailure = (): AuthActionsType => ({
  type: AuthActionsConstants.SIGN_IN_FAILURE,
});

export const SignUpRequest = (
  payload: SignFormValuesType,
): AuthActionsType => ({
  type: AuthActionsConstants.SIGN_UP_REQUEST,
  payload,
});

export const SignUpSuccess = (): AuthActionsType => ({
  type: AuthActionsConstants.SIGN_UP_SUCCESS,
});

export const SignUpFailure = (): AuthActionsType => ({
  type: AuthActionsConstants.SIGN_UP_FAILURE,
});

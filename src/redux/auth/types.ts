export enum AuthActionsConstants {
  SIGN_IN_REQUEST = 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = 'SIGN_IN_FAILURE',
  SIGN_UP_REQUEST = 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE = 'SIGN_UP_FAILURE',
}

// Types for actions
export interface SignFormValuesType {
  email: string;
  password: string;
}

// Types for reducer
export interface AuthReducerType {
  isSignInLoading: boolean;
  isSignUpLoading: boolean;
}

// Types for actions creators
export interface SignInRequestAction {
  type: typeof AuthActionsConstants.SIGN_IN_REQUEST;
  payload: SignFormValuesType;
}

interface SignInSuccessAction {
  type: typeof AuthActionsConstants.SIGN_IN_SUCCESS;
}

interface SignInFailureAction {
  type: typeof AuthActionsConstants.SIGN_IN_FAILURE;
}
export interface SignUpRequestAction {
  type: typeof AuthActionsConstants.SIGN_UP_REQUEST;
  payload: SignFormValuesType;
}

interface SignUpSuccessAction {
  type: typeof AuthActionsConstants.SIGN_UP_SUCCESS;
}

interface SignUpFailureAction {
  type: typeof AuthActionsConstants.SIGN_UP_FAILURE;
}

export type AuthActionsType =
  | SignInRequestAction
  | SignInSuccessAction
  | SignInFailureAction
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpFailureAction;

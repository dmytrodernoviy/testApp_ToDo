import { call, put } from 'redux-saga/effects';
import { ServiceAPIAuth, NavigationService } from '@src/services';
import { consoleLog, networkErrorsHandler } from '@src/utils';
import {
  SignUpFailure,
  SignUpSuccess,
  SignInFailure,
  SignInSuccess,
} from '@src/redux/auth/actions';
import { SignUpRequestAction } from '@src/redux/auth/types';
import { screenNames } from '@src/constants';

export function* signInSaga({ payload }: SignInRequestAction) {
  try {
    const response = yield call(ServiceAPIAuth.signIn, payload);
    yield put(SignInSuccess());
    NavigationService.navigate(screenNames.MainStack);
  } catch (e) {
    yield put(SignInFailure());
    networkErrorsHandler(e);
    consoleLog('authSagaError', e);
  }
}

export function* signUpSaga({ payload }: SignUpRequestAction) {
  try {
    const response = yield call(ServiceAPIAuth.signUp, payload);
    yield put(SignUpSuccess());
    NavigationService.navigate(screenNames.MainStack);
  } catch (e) {
    yield put(SignUpFailure());
    networkErrorsHandler(e);
    consoleLog('authSagaError', e);
  }
}

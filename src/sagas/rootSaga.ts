import { takeEvery } from 'redux-saga/effects';
import { signUpSaga, signInSaga } from '@src/sagas/authSaga';
import { consoleLog } from '@src/utils';
import { AuthActionsConstants } from '@src/redux/auth/types';

export default function* rootSaga() {
  try {
    yield takeEvery(AuthActionsConstants.SIGN_UP_REQUEST, signUpSaga);
    yield takeEvery(AuthActionsConstants.SIGN_IN_REQUEST, signInSaga);
  } catch (e) {
    consoleLog('rootSagaError', e);
  }
}

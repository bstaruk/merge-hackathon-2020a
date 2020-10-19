import { put, takeLatest, delay } from 'redux-saga/effects';
import { actions } from './slice';

export function* loginSaga() {
  yield delay(1500);
  yield put(
    actions.loginSuccess({
      username: 'test123',
      email: 'test@user.com',
    }),
  );
}

export function* userSaga() {
  yield takeLatest(actions.login.type, loginSaga);
}

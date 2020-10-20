import { put, takeLatest, delay } from 'redux-saga/effects';
import { actions } from './slice';

const userData = {
  'brian@staruk.net': {
    emailAddress: 'brian@staruk.net',
    firstName: 'Brian',
    lastName: 'Staruk',
  },
};

export function* loginSaga({ payload }) {
  if (!payload) {
    yield put(
      actions.loginError([
        {
          message: 'No payload present',
        },
      ]),
    );
    return;
  }

  const requiredFieldErrors = [];
  if (!payload.email) {
    requiredFieldErrors.push({
      field: 'email',
      message: 'Email Address is required',
    });
  }

  if (!payload.password) {
    requiredFieldErrors.push({
      field: 'password',
      message: 'Password is required',
    });
  }

  if (requiredFieldErrors.length > 0) {
    yield put(actions.loginError(requiredFieldErrors));
    return;
  }

  yield delay(1500);

  if (!userData[payload.email]) {
    yield put(
      actions.loginError([
        {
          field: 'email',
          message: 'Invalid Email Address',
        },
      ]),
    );
    return;
  }

  // if (payload.password !== 'password') {
  //   yield put(
  //     actions.loginError([
  //       {
  //         field: 'password',
  //         message: 'Invalid Password',
  //       },
  //     ]),
  //   );
  //   return;
  // }

  yield put(actions.loginSuccess(userData[payload.email]));
}

export function* userSaga() {
  yield takeLatest(actions.login.type, loginSaga);
}

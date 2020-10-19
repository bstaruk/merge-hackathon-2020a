import { put, takeLatest, delay } from 'redux-saga/effects';
import { actions } from './slice';

export function* getPrice() {
  yield delay(500);
  yield put(actions.pricesLoaded('success'));
}

export function* homePageSaga() {
  yield takeLatest(actions.loadPrices.type, getPrice);
}

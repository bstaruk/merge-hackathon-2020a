import { put, takeLatest, delay } from 'redux-saga/effects';
import { actions } from './slice';

export function* getThing() {
  yield delay(500);
  yield put(actions.loadThingSuccess('success'));
}

export function* homePageSaga() {
  yield takeLatest(actions.loadThing.type, getThing);
}

import { put, takeLatest, delay } from 'redux-saga/effects';
import { actions } from './slice';

export function* getThing() {
  yield delay(750);
  yield put(actions.loadThingSuccess('thing loaded'));
}

export function* homePageSaga() {
  yield takeLatest(actions.loadThing.type, getThing);
}

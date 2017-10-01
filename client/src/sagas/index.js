import { takeEvery, call, put, select } from 'redux-saga/effects';
import * as api from '../api';
import { FETCH_USER } from '../actions/types';
import { receiveUser } from '../actions/index';

export function* fetchUser() {
  try {
    const user = yield call(api.getUser);
    yield put(receiveUser(user));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_USER, fetchUser);
}

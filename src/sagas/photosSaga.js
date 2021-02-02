import {
  takeEvery,
  call,
  put,
  delay,
  race,
  takeLeading,
} from 'redux-saga/effects';
import {getPhotos} from '../api/requests';

export default function* rootWatcherSaga() {
  yield takeEvery('PHOTOS_REQUESTED', photosWorkerSaga);
}

function* photosWorkerSaga() {
  try {
    yield put({type: 'PHOTOS_START'});

    const {payload, timeout} = yield race({
      payload: call(getPhotos),
      timeout: delay(10000),
    });

    if (timeout) {
      yield put({type: 'ERROR'});
    }

    if (payload) yield put({type: 'PHOTOS_LOADED', data: {photos: payload}});
  } catch (e) {
    yield put({type: 'ERROR'});
  }
}

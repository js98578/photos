import {call, put, delay, race, takeLeading, select} from 'redux-saga/effects';
import {getPhotos} from '../api/requests';

export default function* rootWatcherSaga() {
  yield takeLeading('PHOTOS_REQUESTED', photosLoadWorkerSaga);
  yield takeLeading('MORE_PHOTOS_REQUESTED', photosLoadMoreWorkerSaga);
}

function* photosLoadWorkerSaga(action) {
  try {
    yield put({type: 'PHOTOS_LOAD_START'});

    const page = yield select((state) => state.photos.page);

    const payload = yield call(fetchPhotos, page);

    yield put({
      type: 'PHOTOS_LOADED',
      data: {photos: payload, page: page + 1},
    });
  } catch (e) {
    console.log('photos loading error: ', e.message);
    yield put({type: 'PHOTOS_LOAD_ERROR'});
    yield put({type: 'ERROR'});
  }
}

function* photosLoadMoreWorkerSaga(action) {
  try {
    yield put({type: 'PHOTOS_LOAD_MORE_START'});

    const {page, photos} = yield select((state) => state.photos);

    const payload = yield call(fetchPhotos, page);

    const newPhotos = [...photos, ...payload];
    yield put({
      type: 'PHOTOS_LOADED',
      data: {photos: newPhotos, page: page + 1},
    });
  } catch (e) {
    console.log('photos loading more error: ', e.message);
    yield put({type: 'ERROR'});
  }
}

function* fetchPhotos(page) {
  const {payload, timeout} = yield race({
    payload: call(getPhotos, page),
    timeout: delay(10000),
  });

  if (timeout) {
    throw new Error('Timeout error');
  }
  return payload;
}

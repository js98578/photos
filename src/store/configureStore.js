import {createStore, combineReducers, applyMiddleware} from 'redux';
import photosReducer from '../reducers/photosReducer';
import createSagaMiddleware from 'redux-saga';
import rootWatcherSaga from '../sagas/photosSaga';
import errorReducer from '../reducers/errorReducer';
import detailsReducer from '../reducers/detailsReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  photos: photosReducer,
  error: errorReducer,
  details: detailsReducer,
});

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootWatcherSaga);
  return store;
};

export default configureStore;

import {createStore, combineReducers, applyMiddleware} from 'redux';
import photosReducer from '../reducers/photosReducer';
import createSagaMiddleware from 'redux-saga';
import rootWatcherSaga from '../sagas/photosSaga';
import errorReducer from '../reducers/errorReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  photos: photosReducer,
  error: errorReducer,
});

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootWatcherSaga);
  return store;
};

export default configureStore;

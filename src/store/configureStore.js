import {createStore, combineReducers, applyMiddleware} from 'redux';
import photoReducer from '../reducers/photoReducer';
import createSagaMiddleware from 'redux-saga'
import rootWatcherSaga from '../sagas/photosSaga';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({photos: photoReducer});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(sagaMiddleware));
};

sagaMiddleware.run(rootWatcherSaga)

export default configureStore;

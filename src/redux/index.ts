import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootSaga from '../sagas/rootSaga';
import { rootReducer } from '@src/redux/rootReducer';

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare, logger),
);

sagaMiddleWare.run(rootSaga);

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import todosReducer from './todosReducer';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  todosReducer,
  applyMiddleware(sagaMiddleware)  
)

sagaMiddleware.run(mySaga);

export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import todosReducer from './todosReducer';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  todosReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)  
  )
)

sagaMiddleware.run(mySaga);

export default store;

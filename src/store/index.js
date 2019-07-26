import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'

import todosReducer from './todosReducer';
import journalReducer from './journalReducer';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    todos: todosReducer,
    journal: journalReducer,
  }),
  composeEnhancers(
    applyMiddleware(sagaMiddleware)  
  )
)

sagaMiddleware.run(rootSaga);

export default store;

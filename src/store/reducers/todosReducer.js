import { RECEIVE_TODO, DELETE_TODO, RECEIVE_TODOS } from '../actionTypes';
import { normalizeTodos } from '../helpers';

const todosReducer = (state = {}, { type, payload }) => {
  const { todo, todos } = payload || {};
  let newState = { ...state };
  switch (type) {
    case RECEIVE_TODO:
      newState[todo.id] = todo;
      return newState;

    case RECEIVE_TODOS:
      newState = normalizeTodos(todos)
      return newState;

    case DELETE_TODO:
      delete newState[todo.id];
      return newState;

    default:
      return state;
  }
}

export default todosReducer;

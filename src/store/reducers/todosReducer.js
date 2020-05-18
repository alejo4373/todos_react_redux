import { RECEIVE_TODO, REMOVE_TODO, RECEIVE_TODOS } from '../actionTypes/todos';

const todosReducer = (state = [], { type, payload }) => {
  const { todo, todos } = payload || {};
  let newState = [...state];
  switch (type) {
    case RECEIVE_TODO:
      newState.unshift(todo);
      return newState;

    case RECEIVE_TODOS:
      newState = todos
      return newState;

    case REMOVE_TODO:
      return newState.filter(t => t.id !== todo.id);

    default:
      return state;
  }
}

export default todosReducer;

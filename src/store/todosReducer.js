import { RECEIVE_TODO, DELETE_TODO, TOGGLE_COMPLETED } from './actionTypes';
const todosReducer = (state = {}, { type, todo }) => {
  const newState = { ...state };
  switch (type) {
    case RECEIVE_TODO:
      newState[todo.id] = todo;
      return newState;

    case DELETE_TODO:
      delete newState[todo.id];
      return newState;

    case TOGGLE_COMPLETED:
      newState[todo.id].completed = !newState[todo.id].completed;
      return newState;

    default:
      return state;
  }
}

export default todosReducer;

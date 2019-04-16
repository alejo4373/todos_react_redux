import { ADD_TODO, DELETE_TODO } from './actionTypes';
const todosReducer = (state = {}, { type, todo }) => {
  const newState = {...state};
  switch (type) {
    case ADD_TODO:
      newState[todo.id] = todo;
      return newState;
      break;

   case DELETE_TODO:
      delete newState[todo.id];
      return newState;
      break; 

    default:
      return state;
  } 
}

export default todosReducer;

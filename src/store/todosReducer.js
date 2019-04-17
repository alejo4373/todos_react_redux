import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED }  from './actionTypes';
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

   case TOGGLE_COMPLETED:
      newState[todo.id].completed = !newState[todo.id].completed;
      return newState;
      
    default:
      return state;
  } 
}

export default todosReducer;

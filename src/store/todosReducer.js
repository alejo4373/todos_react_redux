import { ADD_TODO } from './actionTypes';
const todosReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return state
      break;
  
    default:
      return state;
  } 
}

export default todosReducer;

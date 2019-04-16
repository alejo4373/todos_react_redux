import { ADD_TODO } from './actionTypes';
const todosReducer = (state = { "1": {text: "hello", completed: false}}, { type, payload }) => {
  const newState = {...state};
  switch (type) {
    case ADD_TODO:
      return state
      break;
  
    default:
      return state;
  } 
}

export default todosReducer;

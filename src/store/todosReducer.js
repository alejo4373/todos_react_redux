import { ADD_TODO } from './actionTypes';
const todosReducer = (state = { "1": {text: "hello", completed: false}}, { type, todo }) => {
  const newState = {...state};
  switch (type) {
    case ADD_TODO:
      newState[todo.id] = todo;
      return newState;
      break;
  
    default:
      return state;
  } 
}

export default todosReducer;

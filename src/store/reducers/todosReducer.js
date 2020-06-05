import {
  RECEIVE_TODO,
  REMOVE_TODO,
  RECEIVE_TODOS,
  SET_TODOS_FILTER,
  SET_ACTIVE_TODO,
  UPDATE_TODO
} from '../actionTypes/todos';

const initialState = {
  todos: [],
  filter: "all",
  activeTodo: null
}

const todosReducer = (state = initialState, { type, payload }) => {
  const { todo, todos, filter } = payload || {};
  let newState = { ...state };

  switch (type) {
    case SET_TODOS_FILTER:
      newState.filter = filter
      return newState;

    case SET_ACTIVE_TODO:
      newState.activeTodo = todo
      return newState;

    case RECEIVE_TODO:
      newState.todos = [todo, ...newState.todos]
      return newState;

    case RECEIVE_TODOS:
      newState.todos = todos
      return newState;

    case REMOVE_TODO:
      newState.todos = newState.todos.filter(t => t.id !== todo.id);
      return newState;

    case UPDATE_TODO:
      // If todo being updated is the active todo (being rendered in TodoPage)
      // set activeTodo as well
      const { activeTodo } = state
      if (activeTodo && todo.id === activeTodo.id) {
        newState.activeTodo = todo;
      }

      newState.todos = newState.todos.map(t => {
        if (t.id === todo.id) return todo
        return t
      });
      return newState;

    default:
      return state;
  }
}

export default todosReducer;

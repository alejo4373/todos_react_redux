import axios from 'axios';

export const addTodo = (todo) => axios.post('/todos/new', todo)
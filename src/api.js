import axios from 'axios';

export const addTodo = (todo) => axios.post('/todos/new', todo)
export const addJournalEntry = (entry) => axios.post('/journal/add', entry)
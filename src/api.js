import axios from 'axios';

export const addTodo = (todo) => axios.post('/api/todos/new', todo)
export const addJournalEntry = (entry) => axios.post('/api/journal/add', entry)
export const fetchJournalEntries = () => axios.get('/api/journal/entries')

export const login = (credentials) => axios.post('/api/auth/login', credentials)

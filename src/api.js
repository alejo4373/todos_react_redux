import axios from 'axios';

export const addTodo = (todo) => axios.post('/api/todos/new', todo)
export const fetchTodos = () => axios.get('/api/todos/all')
export const updateTodo = (id, updates) => axios.patch(`/api/todos/${id}`, updates)
export const deleteTodo = (id) => axios.delete(`/api/todos/${id}`)

export const addJournalEntry = (entry) => axios.post('/api/journal/add', entry)
export const fetchJournalEntries = () => axios.get('/api/journal/entries')

export const login = (credentials) => axios.post('/api/auth/login', credentials)
export const signup = (userInfo) => axios.post('/api/auth/signup', userInfo)
export const logout = () => axios.get('/api/auth/logout')
export const getUser = () => axios.get('/api/auth/me')

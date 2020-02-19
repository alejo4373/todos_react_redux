export const normalizeTodos = (todos) => {
  const todosMap = {}
  todos.forEach(todo => {
    todosMap[todo.id] = todo
  });

  return todosMap
}

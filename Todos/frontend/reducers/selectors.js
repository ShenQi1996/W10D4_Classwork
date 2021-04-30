export const allTodos = state => {
  let newTodos = Object.values(state.todos);
  return newTodos;
};

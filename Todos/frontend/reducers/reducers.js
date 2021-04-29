import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/action";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false,
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true,
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);

  const newState = Object.assign({}, state);
  debugger;
  switch (action.type) {
    case RECEIVE_TODO:
      debugger;
      newState[action.todo.id] = aciton.todo;
      return newState;
    case RECEIVE_TODOS:
      debugger;
      action.todos.forEach(todo => {
        newState[todo.id] = todo;
      });
      return newState;
    default:
      return state;
  }
};

export default todosReducer;

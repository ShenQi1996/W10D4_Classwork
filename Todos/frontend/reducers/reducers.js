import {RECEIVE_TODO, RECEIVE_TODOS} from "../actions/actions"


const todosReducer = (state = {}, action) => {
    Object.freeze(state);


    const newState = Object.assign({}, state);

    switch (action.type) {
        
        case RECEIVE_TODO: 
        debugger
            newState[action.todo.id] = aciton.todo;
            return newState;
        case RECEIVE_TODOS:
        debugger 
            Object.keys(action.todos).forEach(todo =>{
                newState[todo] = acotion.todos[todo];
            }) 
            return newState;
        default:
            return state;
    }
}


export default todosReducer




import React from "react";
import TodoListItem from "./todo_list_item"
import TodoForm from "./todo_form"
const TodoList = (props) => {
    return (
        <div>
            <h1>All ToDos</h1>
            <ul>
                {props.todos.map(todo => {
                    debugger
                    return (<TodoListItem key= {todo.id} todo={todo} />)
                })}
            </ul>
                <TodoForm receiveTodo = {props.receiveTodo} removeTodo = {props.removeTodo}/>
        </div>
    )
}

export default TodoList;
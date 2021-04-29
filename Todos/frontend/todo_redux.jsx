import React from "react"
import ReactDOM from "react-dom"
import configureStore from "./store/store"
import {receiveTodo, receiveTodos, removeTodo } from "./actions/todo_actions"



document.addEventListener("DOMContentLoaded", () =>{
    const root = document.getElementById("root")
    const test = <h1>Todos App</h1>
    ReactDOM.render(test,root)
    
    
    
    
    // Testing //////
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;
    window.store = configureStore();
    
})
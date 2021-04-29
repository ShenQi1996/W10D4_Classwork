import React from "react"
import ReactDOM from "react-dom"
import configureStore from "./store/store"


document.addEventListener("DOMContentLoaded", () =>{
    const root = document.getElementById("root")
    const test = <h1>Todos App</h1>
    ReactDOM.render(test,root)
    
    
    
    
    // Testing //////
    window.store = configureStore();

})
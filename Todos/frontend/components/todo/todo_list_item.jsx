import React from "react"

class TodoListItem extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <li key={this.props.todo.id}> {this.props.todo.title} {this.props.todo.done}</li>
        )
    }
}
export default TodoListItem;
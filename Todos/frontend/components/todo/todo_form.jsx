import React from "react"

class TodoFrom extends React.Component {
    constructor(props){
        super(props);

        this.state={
            id: function uniqueId() {
                return new Date().getTime();
              },
            title: "",
            body: "",
            done: false,
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleButton = this.handleSubmit.bind(this);
    }

    updateTitle(e){
        this.setState({title: e.target.value});
    }

    updateBody(e){
        this.setState({body: e.target.value});
    }

    handleButton(e) {
        this.setState({done: true})
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.receiveTodo(this.state)

        this.setState({
            id: function uniqueId() {
                return new Date().getTime();
              },
            title: "",
            body: "",
            done: false,
        });

    }

    render(){
        return (
        <form onSubmit={this.handleSubmit}>
            <h1>Add to ToDo list</h1>
            <label>Title
                <input type="text" value= {this.state.title} onChange={this.updateTitle}/>
            </label>
            <label>Body
                <input type="text" value= {this.state.body} onChange={this.updateBody}/>
            </label>
            <button onClick={this.handleButton}>Done</button>
            <input type="submit" value="Add to Todo List"/>
             
        </form>
        )
    }
}

export default TodoFrom;
import React, {Component} from 'react';

class ToDoDisplayView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            title: "",
            task: "",
            controller: props.controller
        };

        ToDoDisplayView.handleSubmit = ToDoDisplayView.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    static handleSubmit(event) {
        event.preventDefault();
    }

    handleClick() {
        let toDo = this.state.controller.getAllToDo();

        this.setState({title: toDo.title});
        this.setState({task: toDo.task});
    }

    render() {
        return (
            <form onSubmit={ToDoDisplayView.handleSubmit}>
                <h3>{this.state.title}</h3>
                <p>{this.state.task}</p>
                <button onClick={this.handleClick}>
                    View All To Do
                </button>
            </form>
        );
    }
}

export default ToDoDisplayView;
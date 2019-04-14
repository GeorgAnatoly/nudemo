import React, {Component} from 'react';
import Search from "../Search";
import Table from "../Table";

const todo = [
    {
        id: 0,
        title: "First Task Title!",
        task: "Do this task first!"
    },
    {
        id: 1,
        title: "Second Task Title!",
        task: "Do this task second!"
    }
];

class ToDoDisplayView extends Component {

    constructor(props) {
        super(props);

        this.state = {
          todo,
            searchTerm: ""
        };
    }

    onDismiss = (id) => {
        const updatedTodo = this.state.todo.filter(
            todo => todo.id !== id
        );

        this.setState({todo: updatedTodo});
    };

    onSearchChange = (event) => {
        this.setState({searchTerm: event.target.value.toUpperCase()});
    };

    render() {
        const {searchTerm, todo} = this.state;

        return (
            <div className={"page"}>
                <div className={"interactions"}>
            <Search
                value={searchTerm}
                onChange={this.onSearchChange}
            >
                Search
            </Search>
                </div>
                <Table
                    todo={todo}
                    pattern={searchTerm}
                    onDismiss={this.onDismiss}
                />


            </div>
        );
    }
}

export default ToDoDisplayView;
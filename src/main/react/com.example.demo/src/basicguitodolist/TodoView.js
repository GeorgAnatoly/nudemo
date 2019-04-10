import React, {Component} from 'react';

class ToDo {
    constructor(id, title, task) {
        this.id = id;
        this.title = title;
        this.task = task;
    }
}

class TodoView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todo: new ToDo(1, "foo", "bar")
        };

    }

    render() {
        return (
                        <div key={this.state.todo.id}>
                        <span>
                            {this.state.todo.title}
                        </span>
                        <span>
                            {this.state.todo.task}
                        </span>
                    </div>
        );
    }

}

export default TodoView;
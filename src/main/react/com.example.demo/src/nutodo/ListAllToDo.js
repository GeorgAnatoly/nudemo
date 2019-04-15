import React, { Component } from 'react';
import MockToDoList from "./MockToDoList";

const mockToDoList = MockToDoList.create();

class ListAllToDo extends Component {

    render() {
        return (
            mockToDoList.map(todo =>
                <div key={todo.id}>
                    <span>
                        {todo.title}
                    </span>
                    <span>
                        {todo.task}
                    </span>
                </div>
            )
        );
    }
}

export default ListAllToDo;
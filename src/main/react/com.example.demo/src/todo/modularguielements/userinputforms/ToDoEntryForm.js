import React, {Component} from 'react';

class ToDoEntryForm extends Component {

    static handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={ToDoEntryForm.handleSubmit}>
                <label>
                    Title:
                    <input type="text"/>
                </label>

                <label>
                    Task:
                    <input type="text"/>
                </label>

                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default ToDoEntryForm;
import React, {Component} from 'react';

class ToDoEntryForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
                id: 0,
                title: "",
                task: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    static handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={ToDoEntryForm.handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                </label>

                <label>
                    Task:
                    <input type="text" name="task" value={this.state.task} onChange={this.handleChange}/>
                </label>

                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default ToDoEntryForm;
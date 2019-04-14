import React, {Component} from 'react';
import ToDoDto from "../../datatransferobject/ToDoDto";

class ToDoEntryForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
                id: 0,
                title: "",
                task: "",
                controller: props.controller,
                searchTerm: ""
        };

    }

    handleChange = (event) => {
        let {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

     handleSubmit = (event) => {
        event.preventDefault();
        let todoDto = new ToDoDto(
            Math.random() * 10000000,
            this.state.title,
            this.state.task
        );

        this.state.controller.createToDo(todoDto);

        this.setState({
            id: 0,
            title: "",
            task: ""
        });
    }

    onSearchChange = (event) => {
        this.setState({searchTerm: event.target.value});


    }

    render() {
        return (
            <div>
            <form>
                <input type="text"
                       onChange={this.onSearchChange}
                />
            </form>
            <form onSubmit={this.handleSubmit}>
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
            </div>
        );
    }
}

export default ToDoEntryForm;
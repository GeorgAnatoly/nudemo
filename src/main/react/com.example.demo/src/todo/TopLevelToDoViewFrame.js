import {Component} from 'react';
import ToDoViewController from "./controller/ToDoViewController";

class TopLevelToDoViewFrame extends Component {

    render() {
        return ToDoViewController.ToDoActionFrame();
    }

}

export default TopLevelToDoViewFrame;
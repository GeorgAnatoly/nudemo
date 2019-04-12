import ToDoEntryForm from "../modularguielements/userinputforms/ToDoEntryForm";
import React from 'react';
import ToDoClientController from "./ToDoClientController";
import ToDoRepository from "../persistence/ToDoRepository";
import ToDoDisplayView from "../modularguielements/formdisplay/ToDoDisplayView";

let toDoRepository = new ToDoRepository();
let toDoClientController = new ToDoClientController(toDoRepository);

class ToDoViewController {

    static ToDoActionFrame() {
        return (
            <>
            <ToDoEntryForm controller={toDoClientController}/>
            <ToDoDisplayView controller={toDoClientController}/>
            </>
            );
    }
}

export default ToDoViewController;
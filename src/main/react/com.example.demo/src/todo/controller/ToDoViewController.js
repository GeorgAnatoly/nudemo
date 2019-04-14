import React from 'react';
import Clock from "../modularguielements/Clock";
import ToDoDisplayView from "../modularguielements/formdisplay/ToDoDisplayView";


class ToDoViewController {

    static ToDoActionFrame() {
        return (
            <>
                <ToDoDisplayView />
            <Clock />
            </>
            );
    }
}

export default ToDoViewController;
import React, { Component } from 'react';
import "./index.css";

class SaveButton extends Component{
    render() {
        return (
            <>
            <button
                type={"button"}
                className={"button"}
                >
                Save
            </button>
            </>
        );
    }
}

export default SaveButton;
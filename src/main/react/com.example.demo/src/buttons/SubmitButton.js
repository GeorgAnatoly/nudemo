import React, { Component } from 'react';
import "./index.css";

class SubmitButton extends Component {
    render() {
        return (
            <>
            <button
                type={"submit"}
                className={"button"}
                >
                Submit
            </button>
            </>
        );
    }
}

export default SubmitButton;
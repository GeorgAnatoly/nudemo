import React, {Component} from 'react';

class DissmissButton extends Component {
    constructor(props) {
        super(props);

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss(todo) {

    }

    render() {
        return (
            <button
                onClick={() => this.onDismiss()}
            >
                Dismiss
            </button>
        );
    }
}
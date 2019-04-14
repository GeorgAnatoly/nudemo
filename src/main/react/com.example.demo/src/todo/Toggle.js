import React, {Component} from 'react';

class Toggle extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isOn: true
        }
    }

    handleClick = () => {
        this.setState(state => ({
            isOn: !state.isOn
        }));
    };

    render() {
        return (
            <button
                onClick={this.handleClick}
                >
                {this.state.isOn ? "ON" : "OFF"}
            </button>
        );
    }
}

export default Toggle;
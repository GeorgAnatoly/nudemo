import React, { Component } from 'react';

class AppInstallButton extends Component {
    constructor(props) {
        super(props);
        this.state = {isOn: true};

        this.handleInstallEvent =
            this.handleInstallEvent.bind(this);
    }

    handleInstallEvent() {
        window.addEventListener(
            "beforeInstallPrompt",
            event => {
                event.preventDefault();

                this.setState(state =>
                    ({isOn: !state.isOn})
                );
            }
        );
    }

    render() {
        return <button
                onLoad={this.handleInstallEvent}
                style={{display:
                    this.state.isOn ?
                    "none" :
                    "block"
            }}>
            Install App
        </button>
    }
}

export default AppInstallButton;
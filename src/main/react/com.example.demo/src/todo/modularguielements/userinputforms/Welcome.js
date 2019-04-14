import React, {Component} from 'react';
import FancyBorder from "./FancyBorder";

class Welcome extends Component {
    render() {
        return (
            <FancyBorder color={"blue"}>
                <h1 className={"Dialog-title"}>
                    Welcome
                </h1>
                <p className={"Dialog-message"}>
                    Thank you for visiting my web application!
                </p>
            </FancyBorder>
        );
    }

}

export default Welcome
import React, { Component } from 'react';
import './App.css';

const URL = "http://localhost:8080/todos";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: null
        }
    }

    setToDos = (result) => {
        this.setState({result});
    };

    componentDidMount() {
        fetch(URL, {mode:"no-cors"})
            .then(response => response.json())
            .then(result => this.setToDos(result))
            .catch(error => error);
    }

    render() {

    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;

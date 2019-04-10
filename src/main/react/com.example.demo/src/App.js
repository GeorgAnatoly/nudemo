import React, { Component } from 'react';
import './App.css';
import TodoView from "./basicguitodolist/TodoView.js";

class App extends Component {
    render() {

    return (
      <div className="App">
        <header className="App-header">
            <TodoView />
        </header>
      </div>
    );
  }
}

export default App;

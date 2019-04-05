import React, { Component } from 'react';
import './App.css';
import AppInstallButton from "./appinstall/AppInstallButton";

class App extends Component {
    render() {

    return (
      <div className="App">
        <header className="App-header">
            <AppInstallButton />
        </header>
      </div>
    );
  }
}

export default App;

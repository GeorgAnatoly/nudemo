import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {register} from "./serviceWorker.js";

ReactDOM.render(<App />, document.getElementById('root'));

register();

if(module.hot) {
    module.hot.accept();
}
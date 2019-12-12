import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

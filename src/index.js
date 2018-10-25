import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "antd/dist/antd.css";
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Link } from 'react-router-dom'

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

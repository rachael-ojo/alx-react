import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from './Notifications';
import './App.css';
import App from './App';

const rootElement = document.getElementById('root');
const notificationsElement = document.getElementById('root-notifications');

ReactDOM.render(<App />, rootElement);
ReactDOM.render(<Notifications />, notificationsElement);

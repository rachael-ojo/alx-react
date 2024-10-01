import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications';

const rootElement = document.getElementById('root');
const notificationsElement = document.getElementById('root-notifications');

ReactDOM.render(<App />, rootElement);
ReactDOM.render(<Notifications />, notificationsElement);

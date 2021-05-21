import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';

import App from './App';
import './store/index';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
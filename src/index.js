import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import mainReducer from './reducers/mainReducer';
import './index.css';

ReactDOM.render(
  <Provider store={createStore(mainReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

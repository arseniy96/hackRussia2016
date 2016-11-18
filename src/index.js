import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App/App';
import mainReducer from './reducers/mainReducer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <Provider store={createStore(mainReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

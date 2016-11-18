import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import App from './components/App/App';
import Index from './components/Index/Index';
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';
import Registration from './components/Registration/Registration';


import mainReducer from './reducers/mainReducer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const store = createStore(mainReducer);
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Navigation}>
        <IndexRoute component={Index}/>
        <Route path="/app" component={App}>
          <IndexRoute component={store.getState().isLogin ? Products : Registration }/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

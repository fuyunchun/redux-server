import React from 'react';
import ReactDOM from 'react-dom';

import Login from './login'
import App from './app'

import {createStore,applyMiddleware} from 'redux'

import {Provider} from 'react-redux'

import thunk from 'redux-thunk'

import reducers from './redcuer'

import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'


const store = createStore(reducers,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/ds" component={App}></Route>
        <Redirect to='/ds'></Redirect>
      </Switch>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

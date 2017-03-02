import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import appReducer from './reducer';
import Home from './scenes/home';

// TODO use spraed for multiple reducers
const store = createStore(
    combineReducers({
        appReducer,
        routing: routerReducer
    })
);
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Home} />
        </Router>
    </Provider>,
    document.getElementById('app-root')
);

import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import {render} from 'react-dom';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers/reducer';
import App from './components/App';

// Create the store
const store = createStore(
    combineReducers(reducers),
    // self.__INITIAL_STATE__,
    applyMiddleware(thunk),
);

// Rendering
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#container'),
);

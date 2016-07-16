import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import * as reducers from './reducer/reducer';
import App from './components/App';

// Create the store
const store = createStore(combineReducers(reducers));

// Rendering
// We encapsulate our App with the Provider component
// of react-redux that will allow us to
// * connect our components to the store
// * expose a dispatch method in the props
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#container'),
);

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
//Import CreateStore, applyMiddleWare, thunk & Priovider
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
//Import Reducer
import { smurfReducer } from './reducers'

const { worker } = require('./mocks/browser');
worker.start();

//createStore
const store = createStore(smurfReducer, applyMiddleware(thunk));
console.log('This is the state:', store.getState());

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk middleware support.
//3. Wrap the App component in a react-redux Provider element.
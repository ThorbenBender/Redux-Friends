import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as types from './state/actionTypes';
import { spinner , getFriends } from './state/reducer';

const customMiddlewareToSaveUserToken = store => next => action => {
    console.log(store);
    if (action.type === types.LOGIN_SUCCESS) {
        localStorage.setItem('userToken', action.payload);
    }
    next(action);
}

const rootReducer = combineReducers({
    getFriends,
    spinner
})

const store = createStore(
    rootReducer,
        applyMiddleware(thunk, logger, customMiddlewareToSaveUserToken),
        window.__REDUX_DEVTOOLS__&& window.__REDUX_DEVTOOLS__EXTENSION__(),
)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

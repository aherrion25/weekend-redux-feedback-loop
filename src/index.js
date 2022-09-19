import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

const feeling = (state = 0, action) => {
    if (action.type === 'SET_FEELING'){
        // dispatch type = 'SET_FEELING' and payload with the value to set
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return 0;
    } 
    return state;
};

const understanding= (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING'){
        // dispatch type = 'SET_UNDERSTANDING' and payload with the value to set
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return 0;
    } 
    return state;
};

const support= (state = 0, action) => {
    if (action.type === 'SET_SUPPORT'){
        // dispatch type = 'SET_SUPPORT' and payload with the value to set
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return 0;
    } 
    return state;
};

const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS'){
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}


// Redux store 
const storeInstance = createStore(
    // reducers
    combineReducers(
        {
            feeling,
            understanding,
            support,
            comments
        }
    ),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>
        , document.getElementById('root'));
registerServiceWorker();

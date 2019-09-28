import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// redux state to hold data until submitted to database
const feedbackReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEELING':
            state = [...state, action.payload]
            return state
        case 'SET_UNDERSTANDING':
            state = [...state, action.payload]
            return state
        case 'SET_SUPPORT':
            state = [...state, action.payload]
            return state
        case 'SET_COMMENTS':
            state = [...state, action.payload]
            return state
        case 'CLEAR_FORM':
            state = []
            return state
        default: return state
    }
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

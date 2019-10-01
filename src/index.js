import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// redux state to hold data until submitted to database
let blankForm = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

const feedbackReducer = (state = blankForm, action) => {
    switch (action.type) {
        case 'SET_FEELING':
            state.feeling = action.payload
            return state
        case 'SET_UNDERSTANDING':
            state.understanding = action.payload
            return state
        case 'SET_SUPPORT':
            state.support = action.payload
            return state
        case 'SET_COMMENTS':
            state.comments = action.payload
            return state
        case 'CLEAR_FORM':
            state = blankForm
            return state
        default: return state
    }
}

// redux state from database to display feedback items to admin page
const displayReducer = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_FEEDBACK':
            state = action.payload
            return state
        default: return state
    }
}

// redux state from database to display flagged items to admin page
const flagReducer = (state = [], action) => {
    switch (action.type) {
        case 'FLAG_ENTRY':
            state = [...state, action.payload]
            console.log('state', state);
            return state
        default: return state
    }
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
        displayReducer,
        flagReducer
    })
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

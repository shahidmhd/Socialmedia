import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import Authslice from "./redux/Authslice.js";


const loadState = () => {
    try {
        const serializedState = localStorage.getItem("reduxState");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

// Save state to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("reduxState", serializedState);
    } catch (err) {
        // Handle potential errors while saving
    }
};

const persistedState = loadState();

const store = configureStore({
    reducer: {
        Authslice: Authslice
    },
    preloadedState: persistedState,
})



store.subscribe(() => {
    saveState(store.getState());
});



ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>



)

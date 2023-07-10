import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import hamburgerReducer from "./features/hamburgerReducer";

const store = configureStore({
    reducer: {
        hamburger: hamburgerReducer
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
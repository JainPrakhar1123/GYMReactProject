import React from "react";
// import ReactDOM  from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import './App.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
const root= ReactDOMClient.createRoot(document.getElementById('root'));
 
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
)

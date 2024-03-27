import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { useState, createContext, useContext } from "react";
import MyProvider from './store/MyProvider';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyProvider>
  <React.StrictMode>
    <BrowserRouter>
   
    <App />
   
   
    </BrowserRouter>
   
  </React.StrictMode>
  </MyProvider>
);



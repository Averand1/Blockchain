import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App';
import { TransactionProvider } from './context/TransactionContext';
ReactDOM.render(
  <Router> {/* Wrap your entire application with BrowserRouter */}
    <TransactionProvider> {/* Wrap TransactionProvider around the Router */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </TransactionProvider>
  </Router>,
  document.getElementById('root')

)

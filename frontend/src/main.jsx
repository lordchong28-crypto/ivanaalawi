// src/main.js (or .jsx) - AFTER
import React from 'react';
// NOTE: Use 'react-dom/client' for the modern API
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';

// 1. Get the container element
const container = document.getElementById('root');

// 2. Use createRoot to create the root instance
if (container) {
  const root = ReactDOM.createRoot(container);

  // 3. Render your app
  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
}
import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import App from './App'; // Import the main App component
import './index.css'; // Optional: Import global styles

// Find the root element in the HTML file
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

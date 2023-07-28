import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Actual from './Actual';
import './Actual.css';
import Runner from './Runner';
import './Runner.css';
import Control from './Control';
import './Control.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Actual/>
    <Runner/>
    <Control/>
  </React.StrictMode>
);


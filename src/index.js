import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SData from './sData';
import Card from './Card';
import App from './App';

const profile = SData;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
  
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import Ukolnincek from './Ukolnicek';
import './style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {<h1>Ukolník</h1>}
    <Ukolnincek/>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

var num1=10;
var num2=20;

var output = (<div>
  <h1>Welcome to React!</h1>
  <hr/>
  <b>num1 = {num1}  num2 = {num2}</b>
  <ol className='maths'>
    <li className='maths-item'>Addition = {num1 + num2}</li>
    <li className='maths-item'>Subtraction = {num1 - num2}</li>
    <li className='maths-item'>Multiplication  = {num1 * num2}</li>
    <li className='maths-item'>Division = {num1 / num2}</li>
  </ol>
</div>)

root.render(output)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

var output =(<div>
  <div class='container'>
    <div class='card shadow-lg mx-auto '>
      <div class='col-12'>
        <div class='card-header bg-primary text-white text-center '>
          <h3 >Intrest Calculate</h3>
        </div>
        <div class='card-body'>
          <label class='form-label'>Amount</label>
          <input type="number" name="amount" class='form-control'/><br/><br/>

          <label class='form-label'>Rate</label>
          <input type="number" name="rate" class='form-control'/><br/><br/>

          <label class='form-label'>Year</label>
          <input type="number" name="year" class='form-control'/><br/><br/>

          <input type="submit" name="submit"/>
        </div>
      </div>
    </div>
  </div>
</div>)

root.render(output)
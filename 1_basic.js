import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//create a website with 3 pages home, about us and contact us using react router dom
function Home(){
  return (<div>
    <h1>Home Page</h1>
  </div>)
}
function Aboutus(){
  return (<div>
    <h1>About Us</h1>
  </div>)
}
function Contactus(){
  return (<div>
    <h1>Contact Us</h1>
  </div>)
}

function Website(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Website />);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//create a website with 3 pages home, about us and contact us using react router dom
function Asia(){
    return (
      <div>
        <h1>Asia</h1>
        <p>Largest continent in the world</p>
        <p>Population: ~4.7 Billion</p>
        <p>Major Countries: India, China, Japan</p>
      </div>
    );
}

function Europe(){
  return (
      <div>
        <h1>Europe</h1>
        <p>Known for history and culture</p>
        <p>Population: ~750 Million</p>
      </div>
    );
}

function Africa(){
  return (
      <div>
        <h1>Africa</h1>
        <p>Second largest continent</p>
        <p>Population: ~1.4 Billion</p>
      </div>
    );
}

function NorthAmerica(){
 return (
      <div>
        <h1>North America</h1>
        <p>Includes USA, Canada, Mexico</p>
      </div>
    );
}

function SouthAmerica(){
  return (
      <div>
        <h1>South America</h1>
        <p>Famous for Amazon rainforest</p>
      </div>
    );
}

function Australia(){
   return (
      <div>
        <h1>Australia</h1>
        <p>Smallest continent</p>
      </div>
    );
}

function Antarctica(){
  return (
      <div>
        <h1>Antarctica</h1>
        <p>Coldest continent</p>
      </div>);
}

function Continent(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Asia />} />
        <Route path="/europe" element={<Europe />} />
        <Route path="/africa" element={<Africa />} />
        <Route path="/north-america" element={<NorthAmerica />} />
        <Route path="/south-america" element={<SouthAmerica />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/antarctica" element={<Antarctica />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Continent />);


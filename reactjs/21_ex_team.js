import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//create a website with 3 pages home, about us and contact us using react router dom
function ChennaiSuperKings(){
  return (<div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>🏏 Chennai Super Kings (CSK)</h1>
      <p><strong>Team Name:</strong> Chennai Super Kings</p>
      <p><strong>Short Form:</strong> CSK</p>
      <p><strong>Home City:</strong> Chennai, Tamil Nadu</p>
      <p><strong>Founded:</strong> 2008</p>
      <p><strong>Captain (IPL 2026):</strong> Ruturaj Gaikwad</p>
      <p><strong>Other Details:</strong> 5-time IPL champions. Known as the "Yellow Army". Home ground: MA Chidambaram Stadium (Chepauk). Famous for consistency, strong middle-order, and massive fan base across the globe.</p>
    </div>)
}

function DelhiCapitals(){
  return(<div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>🏏 Gujarat Titans (GT)</h1>
      <p><strong>Team Name:</strong> Gujarat Titans</p>
      <p><strong>Short Form:</strong> GT</p>
      <p><strong>Home City:</strong> Ahmedabad, Gujarat</p>
      <p><strong>Founded:</strong> 2022</p>
      <p><strong>Captain (IPL 2026):</strong> Shubman Gill</p>
      <p><strong>Other Details:</strong> Champions in 2022 (debut season). Home ground: Narendra Modi Stadium. Young squad with strong bowling attack.</p>
    </div>)
}

function KolkataKnightRiders(){
  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>🏏 Kolkata Knight Riders (KKR)</h1>
      <p><strong>Team Name:</strong> Kolkata Knight Riders</p>
      <p><strong>Short Form:</strong> KKR</p>
      <p><strong>Home City:</strong> Kolkata, West Bengal</p>
      <p><strong>Founded:</strong> 2008</p>
      <p><strong>Captain (IPL 2026):</strong> Shreyas Iyer</p>
      <p><strong>Other Details:</strong> 3-time IPL champions (2012, 2014, 2024). Home ground: Eden Gardens. Famous for purple & gold jerseys and passionate fans.</p>
    </div>)
}

function MumbaiIndians(){
  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>🏏 Mumbai Indians (MI)</h1>
      <p><strong>Team Name:</strong> Mumbai Indians</p>
      <p><strong>Short Form:</strong> MI</p>
      <p><strong>Home City:</strong> Mumbai, Maharashtra</p>
      <p><strong>Founded:</strong> 2008</p>
      <p><strong>Captain (IPL 2026):</strong> Hardik Pandya</p>
      <p><strong>Other Details:</strong> 5-time IPL champions (most successful franchise). Home ground: Wankhede Stadium. "Duniya Hila Denge" motto.</p>    </div>
  )
}

function RajasthanRoyals(){
  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>🏏 Rajasthan Royals (RR)</h1>
      <p><strong>Team Name:</strong> Rajasthan Royals</p>
      <p><strong>Short Form:</strong> RR</p>
      <p><strong>Home City:</strong> Jaipur, Rajasthan</p>
      <p><strong>Founded:</strong> 2008</p>
      <p><strong>Captain (IPL 2026):</strong> Riyan Parag</p>
      <p><strong>Other Details:</strong> 2008 IPL champions (first edition). Home ground: Sawai Mansingh Stadium. Famous for smart scouting and young talent.</p>
    </div>)
}

function LucknowSuperGiants(){
  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>🏏 Lucknow Super Giants (LSG)</h1>
      <p><strong>Team Name:</strong> Lucknow Super Giants</p>
      <p><strong>Short Form:</strong> LSG</p>
      <p><strong>Home City:</strong> Lucknow, Uttar Pradesh</p>
      <p><strong>Founded:</strong> 2022</p>
      <p><strong>Captain (IPL 2026):</strong> Rishabh Pant</p>
      <p><strong>Other Details:</strong> Home ground: Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium. Known for high-scoring matches and star-studded squad.</p>
    </div>)
}

function Team(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< ChennaiSuperKings/>} />
        <Route path="/delhi-capitala" element={< DelhiCapitals/>} />
        <Route path="/kolkata-knight-riders" element={< KolkataKnightRiders/>} />
        <Route path="/mumbai-indians" element={< MumbaiIndians/>} />
        <Route path="/rajasthan-royal" element={< RajasthanRoyals/>} />
        <Route path="/lucknow-super-giants" element={< LucknowSuperGiants/>} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Team />);


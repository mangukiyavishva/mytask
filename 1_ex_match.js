import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './match.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
var output =(<div>
    <h1>T20 World Cup 2026 Fixtures</h1>

  <table>
    <thead>
      <tr>
        <th class="date">Date</th>
        <th class="match">Match</th>
        <th class="time-venue">Time & Venue</th>
        <th class="status">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="date">4 June 2026</td>
        <td class="match">India vs Pakistan</td>
        <td class="time-venue">7:30 PM IST • Eden Gardens, Kolkata</td>
        <td class="status upcoming">Upcoming</td>
      </tr>
      <tr>
        <td class="date">6 June 2026</td>
        <td class="match">England vs Australia</td>
        <td class="time-venue">8:00 PM IST • Narendra Modi Stadium, Ahmedabad</td>
        <td class="status upcoming">Upcoming</td>
      </tr>
      <tr>
        <td class="date">12 June 2026</td>
        <td class="match">New Zealand vs South Africa</td>
        <td class="time-venue">7:30 PM IST • M. Chinnaswamy, Bengaluru</td>
        <td class="status live">LIVE</td>
      </tr>
      <tr>
        <td class="date">15 June 2026</td>
        <td class="match">Australia vs West Indies</td>
        <td class="time-venue">7:30 PM IST • Ekana Stadium, Lucknow</td>
        <td class="status upcoming">Upcoming</td>
      </tr>
      <tr>
        <td class="date">29 June 2026</td>
        <td class="match">Final: India vs South Africa</td>
        <td class="time-venue">7:00 PM IST • Wankhede Stadium, Mumbai</td>
        <td class="status completed">Completed</td>
      </tr>
    </tbody>
  </table>
</div>)

root.render(output)
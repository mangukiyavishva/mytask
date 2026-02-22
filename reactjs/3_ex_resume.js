import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './resum.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

var name = "Mangukiya vishva";
var dob = "28/5/2006";
var address = "Surat, Gujarat, India";
var email = "mangukiyavishva@gmail.com";
var mobile = "1234567890";
var gender = "female";  
var education = "B.E. Computer Engineering";
var output = (
  <>
  <h1>{name}</h1>
  <div className="contact">
    Mobile: {mobile}  |  Email: {email}
    <br />
    {address}
  </div>
  <hr />
  <h2>Personal Information</h2>
  <table>
    <tbody>
      <tr>
        <td className="label">Date of Birth</td>
        <td className="value">: {dob}</td>
      </tr>
      <tr>
        <td className="label">Gender</td>
        <td className="value">: {gender}</td>
      </tr>
      <tr>
        <td className="label">Address</td>
        <td className="value">
          : {address}
        </td>
      </tr>
      <tr>
        <td className="label">Mobile</td>
        <td className="value">: {mobile}</td>
      </tr>
      <tr>
        <td className="label">Email</td>
        <td className="value">: {email}</td>
      </tr>
    </tbody>
  </table>
  <h2>Education</h2>
  <div className="education-row">
    <strong>
      {education}
    </strong>
    <br />
    [V.S Lakhani Collage of Computer science], [Bhavnagar University]
    <br />
    Year of Passing: [2026]  |  CGPA / Percentage: [8.2 / 82%]
  </div>
  <div className="education-row">
    <strong>Higher Secondary (12th)</strong>
    <br />
    [Lathidad] – [Board: GSEB / CBSE etc.]
    <br />
    Year: [2021]  |  Percentage: [78%]
  </div>
  <div className="education-row">
    <strong>Secondary (10th)</strong>
    <br />
    [Lathidad] – [Board: GSEB / CBSE etc.]
    <br />
    Year: [2019]  |  Percentage: [92%]
  </div>
</>
)
root.render(output)
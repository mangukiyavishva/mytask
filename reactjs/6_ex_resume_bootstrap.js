import React from 'react';
import ReactDOM from 'react-dom/client';
import './resume_bootstrap.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Resume(data){
   return (<div className="container" style={{ maxWidth: 900 }}>
  {/* Header Card */}
  <div className="resume-card">
    <div className="card-header text-center">{data.name}</div>
    <div className="card-body text-center">
      <p className="lead mb-2">
        [Aspiring Web Developer / Fresher / Your Target Role]
      </p>
      <p className="mb-1">
        <strong>Mobile:</strong> +91 {data.mobile} &nbsp; • &nbsp;
        <strong>Email:</strong> {data.email}
      </p>
      <p className="mb-0">{data.city}, Gujarat, India</p>
    </div>
  </div>
  {/* Personal Information */}
  <div className="resume-card">
    <div className="card-header">Personal Information</div>
    <div className="card-body">
      <p>
        <span className="info-label">Date of Birth:</span> {data.dob}
      </p>
      <p>
        <span className="info-label">Gender:</span> {data.gender}
      </p>
      <p>
        <span className="info-label">Address:</span>
        <br />
        [House]
        <br />
        [Area, City – PIN Code]
        <br />
        Gujarat, India
      </p>
      <p>
        <span className="info-label">Languages:</span> Gujarati (Native), Hindi,
        English
      </p>
    </div>
  </div>
  {/* Education */}
  <div className="resume-card">
    <div className="card-header">Education</div>
    <div className="card-body">
      <div className="timeline-item">
        <span className="dot" />
        <strong>[BCA – [Branch]</strong>
        <br />
        <span className="text-muted">[v.s lakhani collage of computer science/ University Name], [{data.city}]</span>
        <br />
        <span className="text-muted small">
          Year: [202X – 202X] • CGPA / % : [8.2 / 82%]
        </span>
      </div>
      <div className="timeline-item">
        <span className="dot" />
        <strong>Higher Secondary (12th)</strong>
        <br />
        <span className="text-muted">
          [Lathidad] – [Board: GSEB / CBSE etc.]
        </span>
        <br />
        <span className="text-muted small">
          Year: [202X] • Percentage: [XX%]
        </span>
      </div>
      <div className="timeline-item">
        <span className="dot" />
        <strong>Secondary (10th)</strong>
        <br />
        <span className="text-muted">[Lathidad] – [Board]</span>
        <br />
        <span className="text-muted small">
          Year: [202X] • Percentage: [XX%]
        </span>
      </div>
    </div>
  </div>
  {/* Optional: Skills (simple list version) */}
  <div className="resume-card">
    <div className="card-header">Skills</div>
    <div className="card-body">
      <div className="row g-2">
        <div className="col-6 col-md-4">
          <span className="badge bg-primary-subtle text-primary px-3 py-2">
            HTML &amp; CSS
          </span>
        </div>
        <div className="col-6 col-md-4">
          <span className="badge bg-primary-subtle text-primary px-3 py-2">
            Bootstrap 5
          </span>
        </div>
        <div className="col-6 col-md-4">
          <span className="badge bg-primary-subtle text-primary px-3 py-2">
            JavaScript
          </span>
        </div>
        <div className="col-6 col-md-4">
          <span className="badge bg-primary-subtle text-primary px-3 py-2">
            Git
          </span>
        </div>
        <div className="col-6 col-md-4">
          <span className="badge bg-primary-subtle text-primary px-3 py-2">
            Responsive Design
          </span>
        </div>
        {/* add more if needed */}
      </div>
    </div>
  </div>
</div>
)}
let data = {
    email: 'mangukiyavishva@gamil.com',
    mobile: '8976543456',
    password: '12345',
    confirmPassword: '98765',
    gender: 'female',
    dob: '28-5-2006',     
    city: 'Surat',
    name: 'Vishva Mangukiya'    
}
root.render(Resume(data))
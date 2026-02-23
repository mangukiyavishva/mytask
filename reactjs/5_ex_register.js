import React from 'react';
import ReactDOM from 'react-dom/client';
import './register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Rejister(data){
    return(<div className="register-container">
  <div className="card">
    <div className="card-header">Create New Account</div>
    <div className="card-body p-4 p-md-5">
      <form id="registerForm" noValidate="">
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            required=""
          />
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>
        {/* Mobile */}
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="mobile"
            placeholder="10-digit mobile number"
            pattern="[0-9]{10}"
            maxLength={10}
            required=""
          />
          <div className="invalid-feedback">
            Please enter a valid 10-digit mobile number.
          </div>
        </div>
        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Minimum 8 characters"
            minLength={8}
            required=""
          />
          <div className="invalid-feedback">
            Password must be at least 8 characters.
          </div>
        </div>
        {/* Confirm Password */}
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Re-enter password"
            required=""
          />
          <div className="invalid-feedback">Passwords do not match.</div>
        </div>
        {/* Gender */}
        <div className="mb-4">
          <label className="form-label">Gender</label>
          <div className="d-flex gap-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                defaultValue="male"
                required=""
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                defaultValue="female"
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="other"
                defaultValue="other"
              />
              <label className="form-check-label" htmlFor="other">
                Other
              </label>
            </div>
          </div>
          <div className="invalid-feedback d-block">
            Please select your gender.
          </div>
        </div>
        {/* Date of Birth */}
        <div className="mb-4">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input type="date" className="form-control" id="dob" required="" />
          <div className="invalid-feedback">
            Please select your date of birth.
          </div>
        </div>
        {/* Submit Button */}
        <div className="d-grid">
          <button className="btn btn-primary btn-lg btn-register" type="submit">
            Register
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <small className="text-muted">
          Already have an account?{" "}
          {/* <a href="#" className="text-primary">
            Login here
          </a> */}
        </small>
      </div>
    </div>
  </div>
</div>
)
}
let data = {
    email: 'mangukiyavishva@gamil.com',
    mobile: '8976543456',
    password: '12345',
    confirmPassword: '98765',
    gender: 'female',
    dob: '28-5-2006'       
}

root.render(Rejister(data))
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './header';
import '../css/login.css';


const Login = () => {
  const [loanInputs, setLoanInputs] = useState({ First: "", Last: "", Emploi: "", City: "", Email: "", Password: "", aemail: "", password: ""});
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2000/api/register', {
        First: loanInputs.First,
        Last: loanInputs.Last,
        Emploi: loanInputs.Emploi,
        City: loanInputs.City,
        Email: loanInputs.Email,
        Password: loanInputs.Password
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Failed to register!');
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2000/api/login', {
        aemail: loanInputs.aemail,
        password: loanInputs.password
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error during login:', error);
      alert('Failed to login!');
    }
  };

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div>
      <Header />
      <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
        

        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUp} className="p-4 border rounded shadow-sm bg-light">
            <h1 className="text-center mb-4">Create Account</h1>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="First Name" value={loanInputs.First} onChange={(e) => setLoanInputs({ ...loanInputs, First: e.target.value })} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Last Name" value={loanInputs.Last} onChange={(e) => setLoanInputs({ ...loanInputs, Last: e.target.value })} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Emploi" value={loanInputs.Emploi} onChange={(e) => setLoanInputs({ ...loanInputs, Emploi: e.target.value })} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="City" value={loanInputs.City} onChange={(e) => setLoanInputs({ ...loanInputs, City: e.target.value })} />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email" value={loanInputs.Email} onChange={(e) => setLoanInputs({ ...loanInputs, Email: e.target.value })} />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Password" value={loanInputs.Password} onChange={(e) => setLoanInputs({ ...loanInputs, Password: e.target.value })} />
            </div>
            <button className="btn btn-success w-100">Sign Up</button>
          </form>
        </div>
      
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignIn} className="p-4 border rounded shadow-sm bg-light">
            <h1 className="text-center mb-4">Sign In</h1>
            <div className="d-flex justify-content-center mb-3">
              <Link to="#" className="social mx-2 text-primary">
                <i className="fab fa-facebook-f fa-2x"></i>
              </Link>
              <Link to="#" className="social mx-2 text-danger">
                <i className="fab fa-google-plus-g fa-2x"></i>
              </Link>
              <Link to="#" className="social mx-2 text-info">
                <i className="fab fa-linkedin-in fa-2x"></i>
              </Link>
            </div>
            <p className="text-center mb-3">or use your account</p>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-control" placeholder="Enter your email" value={loanInputs.aemail} onChange={(e) => setLoanInputs({ ...loanInputs, aemail: e.target.value })} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" id="password" className="form-control" placeholder="Enter your password" value={loanInputs.password} onChange={(e) => setLoanInputs({ ...loanInputs, password: e.target.value })} />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <Link to="#" className="text-decoration-none">Forgot your password?</Link>
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign In</button>
          </form>
        </div>
        
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className=" btn btn-success" id="signIn" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="btn btn-outline-success" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Ajouter from 'axios';
import Header from './header';
import '../css/login.css';


const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setpassword] = useState("")
  return (
    <div>
      <Header />
      <div className='' id="">
        
        <form onSubmit={Ajouter} className="p-4 border rounded shadow-sm bg-light" >
        <div className="row justify-content-center " >
        <div
          className="col-md-10  col-12 flex-column justify-content-center p-9 "
          id="logo"
        >
          <h1 className="mb-4 text-center">Login</h1>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email"  onChange={(e) => {setEmail(e.target.value )}}/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e) => {setpassword(e.target.value )}}/>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary w-100">Login</button>
          </div>
          <div className="mb-3">
            <Link href="#" className="link-primary">Forgot your password?</Link>
          </div>
          <hr />
          <div>
            <button className="btn btn-success w-100">Create Account</button>
          </div>
        </div>
      </div>
        </form>
      
      </div>
    </div>
  );
};

export default Login;

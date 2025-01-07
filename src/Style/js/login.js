import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./header"

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <div>
      <Header />
      </div>

      <div className={`container ${isSignIn ? 'sign-in-mode' : 'sign-up-mode'}`} id="container">

        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Faref-lsh.men.gov.ma%2Far%2FPages%2FAccueil.aspx%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR02wmjR3yvIptYwkGUEWFcXWb43iWM6Q6GVxqUF_zQH0rClEa_B3Es-LvU_aem_rJ4BdHG3Ym7zv-pwCzIbKw&h=AT0WXHSJr4vsQZ-hn1AxwkNCQEdUVvlyFa6vdh0rrj2-fHxDf__etItdjQTBBWO1vXpUu4m-CjMyBWOiEWI3g-KHHAN-sMK-fiFcbUTyeM5ahtA7MkrgnES28e_Z5SccuoODww" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="aref.laayoune@men.gov.ma" className="social">
                <i className="fa fa-envelope"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <a href="https://your-new-link.com" target="_blank" rel="noopener noreferrer">
              Forgot your password?
            </a>
            <button>Sign In</button>
          </form>
        </div>


        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={toggleForm}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={toggleForm}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>


    
    </>



  );
}

export default Login;

import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      <div className="left">
        <img
          src="https://as2.ftcdn.net/v2/jpg/05/61/78/06/1000_F_561780689_c9RUnG3ZpAwFQhKfnJxSPZnZ1sHqnC3m.jpg"
          alt="Lovebird Illustration"
          className="lovebirds-img"
        />
        <h2 className="left-heading">Maecenas mattis egestas</h2>
        <p className="left-text">
          Erdum et malesuada fames ac ante ipsum primis <br />
          in faucibus suspendisse porta.
        </p>
      </div>

      <div className="right">
        <h1 className="logo">Lovebirds</h1>
        <h2>Welcome to Lovebirds</h2>

        <label>Users name or Email</label>
        <input type="text" placeholder="David Brooks" />

        <label>Password</label>
        <input type="password" placeholder="********" />

        <div className="form-options">
          <a href="#">Forgot password?</a>
        </div>

        <button className="sign-in-btn">Sign in</button>

        <div className="divider">or</div>

        <button className="google-btn">Sign in with Google</button>
        <p className="signup-text">
          New Lovebirds? <a href="#">Create Account</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
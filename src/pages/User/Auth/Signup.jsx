import React from "react";
import "./Signup.css";
const Signup = () => {
  return (
    <div>
      <section id="signup">
        <div className="signin-section">
          <h1>Welocme Back!</h1>
          <p>To keep connected with us please login with your credentials.</p>
          <button>Sign in</button>
        </div>

        <div className="signup-form">
          <h1>Create Account</h1>
          <div className="signup-links">
            <a href="none">
              <i className="fab fa-apple"></i>
            </a>
            <a href="/none">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="/none">
              <i className="fab fa-google"></i>
            </a>
          </div>
          <form action="">
            <i className="fa fa-user"></i>
            <input type="text" placeholder="Name" />
            <br />
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
            <br />
            <i className="fa fa-lock"></i>
            <input type="password" placeholder="Password" />
            <br />
            <button>Signup</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signup;

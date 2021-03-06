import React, { useState, useEffect, useContext } from "react";
import "../../User/Auth/Signup.css";
import AlertContext from "../../../context/alert/alertContext";
import AuthContext from "../../../context/auth/authContext";
import { Redirect } from "react-router-dom";
const PsychSignUp = (props) => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const {
    registerPsychiatrist,
    error,
    clearErrors,
    isAuthenticated,
  } = authContext;

  const [psych, setPsych] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    redirect: false,
  });

  const { name, email, password, password2, redirect } = psych;

  useEffect(() => {
    if (isAuthenticated) {
      setPsych({ redirect: true });
    }
    if (error === "User already exist") {
      setAlert(error);
      clearErrors();
    }
    //   eslint-disable-next-line
  }, [error, isAuthenticated, redirect, props.history]);

  if (redirect) {
    return <Redirect to="/vp/psychiatrist/dashboard" />;
  }

  const onChange = (e) => {
    setPsych({ ...psych, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("password doesn't match");
    } else {
      registerPsychiatrist({
        name,
        email,
        password,
      });
    }
  };

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
              <i className="fab fa-google"></i>
            </a>
            <a href="/none">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <form onSubmit={onSubmit}>
            <i className="fa fa-user"></i>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              required
              placeholder="Name"
            />
            <br />
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              placeholder="Email"
            />
            <br />
            <i className="fa fa-lock"></i>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              minLength="6"
              placeholder="Password"
            />
            <br />
            <i className="fa fa-lock"></i>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              required
              minLength="6"
              placeholder="Confirm Password"
            />
            <br />
            <input type="submit" value="Sign up" className="signup-btn" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default PsychSignUp;

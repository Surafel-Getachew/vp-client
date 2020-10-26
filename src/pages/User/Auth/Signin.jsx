import React,{useState,useContext,useEffect} from 'react';
import {Redirect} from "react-router-dom"
import "./Signup.css";
import AuthContext from "../../../context/auth/authContext";
import AlertContext from "../../../context/alert/alertContext";

const Signin = (props) => {
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const {login,isAuthenticated,error,clearErrors} = authContext;
    
    const [user,setUser] = useState({
        email:"",
        password:"",
        redirect:false,
    })
    
    const {email,password,redirect} = user;
    
    useEffect(() => {
        if (isAuthenticated) {
            setUser({ redirect: true });
        }
        if (error) {
            setAlert(error);
            clearErrors();
        }
        //   eslint-disable-next-line
    }, [error, isAuthenticated, redirect, props.history]);

    if (redirect) {
        return <Redirect to="/vp/user/dashboard" />;
    }

    const onChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        login({email,password})
    }

    return (
        <div>
            <section id="signup">
                <div className="signin-section">
                    <h1 style={{ textAlign: "center" }}>Virtual Psychiatrist!</h1>
                    <p>User Login Page.</p>
                    {/* <button>Sign up</button> */}
                </div>

                <div className="signup-form">
                    <h1>Sign In</h1>
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
                        <input type="submit" value="Sign in" className="signup-btn" />
                        <p>
                            <a href="none" style={{ color: "#757575" }}>
                                Forgot Password?
              </a>
                        </p>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Signin

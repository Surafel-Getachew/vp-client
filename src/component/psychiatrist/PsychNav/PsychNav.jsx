import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./PsychNav.css"
import "../PsychNav/Psycha-side-nav.css";
import AuthContext from "../../../context/auth/authContext";

const PsychNav = () => {
  const authContext = useContext(AuthContext);
  const { loadPsychiatrist, user } = authContext;

  useEffect(() => {
    loadPsychiatrist();
    // eslint-disable-next-line
  }, []);
  return (
   
      <div id="psych-side-nav">
        <div className="profile-side-nav">
          <div className="profile-side-nav-container">
            <a href="none">
              <img
                src={require("../../../assets/images/doctors/doctor-thumb-02.jpg")}
                alt=""
              />
            </a>
            <div className="profile-side-nav-info">
              <h3>{user.name}</h3>
              {/* <h3>Ross geller</h3> */}
              <h5>Dragon</h5>
            </div>
          </div>
        </div>
        <div className="psych-side-nav-menu">
          <ul>
            <li>
              <Link className="a">
                <i className="fas fa-columns"></i> <span>Dashboard</span>{" "}
              </Link>
            </li>
            <li>
              <Link className="a">
                <i className="fas fa-calendar-check"></i>
                <span>Schedule Timings</span>
              </Link>
            </li>
            <li>
              <Link className="a" to="/vp/psychiatrist/article">
                <i className="fas fa-newspaper"></i>
                <span>Article</span>
              </Link>
            </li>
            <li>
              <Link className="a">
                <i className="fas fa-users"></i>
                <span>Group Chat</span>
              </Link>
            </li>
            <li>
              <Link className="a">
                <i className="fas fa-video"></i>
                <span>Video Chat</span>
              </Link>
            </li>
            <li>
              <Link className="a" to="/vp/psychiatrist/profile">
                <i className="fas fa-user-cog"></i>
                <span>Profile Setting</span>
              </Link>
            </li>
            <li>
              <Link className="a">
                <i className="fas fa-share-alt"></i>
                <span>Social Media links</span>
              </Link>
            </li>
            <li>
              <Link className="a">
                <i className="fas fa-lock"></i>
                <span>Change Password</span>
              </Link>
            </li>
            <li>
              <Link className="a">
                <i className="fas fa-sign-out-alt"></i>
                <span>Change Password</span>
              </Link>
            </li>
            <li>
              <Link className="a" to="/vp/article">
                <i className="fas fa-sign-out-alt"></i>
                <span>Change Password</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default PsychNav;

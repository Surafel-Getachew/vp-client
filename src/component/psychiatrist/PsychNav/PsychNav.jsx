import React from 'react'
// import "./PsychNav.css"
import "../PsychNav/Psycha-side-nav.css"

const PsychNav = ({user}) => {
   
    return (
        <div id = "psych-side-nav">
            <div className = "profile-side-nav">
                <div className = "profile-side-nav-container">
                    <a href="none"><img src={require("../../../assets/images/doctors/doctor-thumb-02.jpg")} alt="" /></a>
                    <div className = "profile-side-nav-info">
                        <h3>{user.name}</h3>
                        {/* <h3>Ross geller</h3> */}
                        <h5>Dragon</h5>
                    </div>
                </div>
            </div>
            <div className = "psych-side-nav-menu">
                <ul>
                    <li><a href="none"><i className="fas fa-columns"></i> <span>Dashboard</span> </a></li>
                    <li><a href="none"><i className="fas fa-calendar-check"></i><span>Schedule Timings</span></a></li>
                    <li><a href="none"><i className="fas fa-newspaper"></i><span>Article</span></a></li>
                    <li><a href="none"><i className="fas fa-users"></i><span>Article</span></a></li>
                    <li><a href="none"><i className="fas fa-video"></i><span>Video Chat</span></a></li>
                    <li><a href="none"><i className="fas fa-user-cog"></i><span>Profile Setting</span></a></li>
                    <li><a href="none"><i className="fas fa-share-alt"></i><span>Social Media links</span></a></li>
                    <li><a href="none"><i className="fas fa-lock"></i><span>Change Password</span></a></li>
                    <li><a href="none"><i className="fas fa-sign-out-alt"></i><span>Change Password</span></a></li>
                </ul>
            </div>
        </div>
    )
}

export default PsychNav

import React, { useState, useEffect } from "react";
import styles from "./psychprofile.module.css";
import { connect } from "react-redux";
import {
  psychProfileForm,
} from "../../../Redux/PsychProfile/psych_profile_aciton";

const BasicInformation = ({ psychProfileForm,profileForm }) => {
  const [basicinfo, setBasicInfo] = useState({ firstname: "", lastname: "" });

  const { firstname, lastname } = basicinfo;
  const onChange = (e) => {
    setBasicInfo({ ...basicinfo, [e.target.name]: e.target.value });
   
  };
  useEffect(() => {
    psychProfileForm({basicinfo});
  }, [basicinfo,psychProfileForm]);

    
  //   onsubmit
  

  return (
    <form  className={styles.profileCard}>
      <div className={styles.profileCardCenter}>
        <div className={styles.profileCardTitle}>
          <h4>Basic information</h4>
        </div>
        <div className={styles.profileCardForm}>
          <div>
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" name="username" />
            <br />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" />
            <br />
          </div>
          <div>
            <label htmlFor="firstname">First Name</label>
            <br />
            <input
              type="text"
              name="firstname"
              onChange={onChange}
              value={firstname}
            />
            <br />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <br />
            <input
              type="text"
              name="lastname"
              onChange={onChange}
              value={lastname}
            />
            <br />
          </div>
          <div>
            <label htmlFor="birth">Date of Birth</label>
            <br />
            <input type="text" name="birth" />
            <br />
          </div>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  profileForm: state.psychProfile.psychProfileForm,
});

export default connect(mapStateToProps, { psychProfileForm })(BasicInformation);

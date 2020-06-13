import React, { useState } from "react";
import { connect } from "react-redux";
import { addPsychProfile } from "../../../Redux/PsychProfile/psych_profile_aciton";
import PsychPage from "../../../component/Page/PsychPage";
import styles from "./psychProfile.module.css";

const PsychProfile = ({ psychProfile, addPsychProfile }) => {
  // const [profile,setProfile] = useState({basicInformation:{firstname:"",lastname:""}});
  // const {basicInformation} = profile;
  // const {firstname,lastname} = basicInformation;
  const initialState = {
    basicInformation:{firstname:"",lastname:""}  
  }
  
  const [profile, setProfile] = useState(initialState);
  const BasicInfo = initialState.basicInformation;
  const {firstname,lastname} = BasicInfo;
  
  const onChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };


  const onSubmit = (e) => {
    e.preventDefault();
    addPsychProfile(profile);
  };

  return (
    <PsychPage>
      <form onSubmit = {onSubmit}>
        <div className={styles.profileCard}>
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
                  catagory = "basicInformation"
                  type="text"
                  name="firstname"
                  // value={firstname}
                  onChange={onChange}
                  value = {firstname}
                />
                <br />
              </div>
              <div>
                <label htmlFor="lastname">Last Name</label>
                <br />
                <input
                  catagory="basicInformation"
                  type="text"
                  name="lastname"
                  // value={lastname}
                  value = {lastname}
                  onChange={onChange}
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
        </div>
        {/* end of Basic  info*/}
        <div className={styles.profileCard}>
          <div className={styles.profileCardCenter}>
            <div className={styles.profileCardTitle}>
              <h4>About Me</h4>
            </div>
            <div className={styles.profileCardForm}>
              <div>
                <textarea></textarea>
              </div>
            </div>
          </div>
        </div>
        {/* end of about me */}
        <div className={styles.profileCard}>
          <div className={styles.profileCardCenter}>
            <div className={styles.profileCardTitle}>
              <h4>Contact Details</h4>
            </div>
            <div className={styles.profileCardForm}>
              <div>
                <label htmlFor="address1">Address Line 1</label>
                <input type="text" name="address" />
              </div>
              <div>
                <label htmlFor="address1">Address Line 2</label>
                <input type="text" name="address" />
              </div>
              <div>
                <label htmlFor="address1">City</label>
                <input type="text" name="address" />
              </div>
              <div>
                <label htmlFor="address1">State/province</label>
                <input type="text" name="address" />
              </div>
              <div>
                <label htmlFor="address1">Country</label>
                <input type="text" name="address" />
              </div>
              <div>
                <label htmlFor="address1">Postal Code</label>
                <input type="text" name="address" />
              </div>
            </div>
          </div>
        </div>
        {/* end of contact details */}
        <div className={styles.profileCard}>
          <div className={styles.profileCardCenter}>
            <div className={styles.profileCardTitle}>
              <h4>Services and Specialization</h4>
            </div>
            <div className={styles.profileCardForm}>
              <div>
                <label htmlFor="services">Services</label>
                <br />
                <input type="text" />
                <br />
                <label htmlFor="services">Specialization</label>
                <br />
                <input type="text" />
                <br />
              </div>
            </div>
          </div>
        </div>
        {/* end of service and specializing */}
        <div className={styles.profileCard}>
          <div className={styles.profileCardCenter}>
            <div className={styles.profileCardTitle}>
              <h4>Education</h4>
            </div>
            <div className={styles.profileCardForm}>
              <div>
                <label htmlFor="services">Degree</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="services">College/institution</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="services">Year of Completion</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
        {/* end of education */}
        <div className={styles.profileCard}>
          <div className={styles.profileCardCenter}>
            <div className={styles.profileCardTitle}>
              <h4>Experiance</h4>
            </div>
            <div className={styles.profileCardForm}>
              <div>
                <label htmlFor="services">Hospital Name</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="services">From</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="services">To</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="services">Designation</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
        {/* end of awards */}
        <div className={styles.profileCard}>
          <div className={styles.profileCardCenter}>
            <div className={styles.profileCardTitle}>
              <h4>Awards</h4>
            </div>
            <div className={styles.profileCardForm}>
              <div>
                <label htmlFor="services">Awards</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="services">Year</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
        {/* end of Awards */}
        <div className={styles.profileCard}>
          <div className={styles.profileCardCenter}>
            <div className={styles.profileCardTitle}>
              <h4>Memberships</h4>
            </div>
            <div className={styles.profileCardForm}>
              <div>
                <label htmlFor="services">Degree</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
        <input type="submit" value = "submit"/>
        {/* <button
          type="submit"
          onSubmit={onSubmit}
          onClick ={onSubmit}
          className={styles.profileFormBtn}
        >
          Save Changes
        </button> */}

        {/*  */}
      </form>
    </PsychPage>
  );
};

const mapStateToProps = (state) => ({
  psychProfile:state.psychProfile.profiles
})

export default connect(mapStateToProps,{addPsychProfile})(PsychProfile);

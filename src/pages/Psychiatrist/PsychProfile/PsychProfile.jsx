import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  addPsychProfile,
  loadPsychProfile,
} from "../../../Redux/PsychProfile/psych_profile_aciton";
import PsychPage from "../../../component/Page/PsychPage";
import styles from "./psychProfile.module.css";

const initialState = {
  firstname: "",
  lastname: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  country: "",
  about: "",
  services: "",
  postalCode: "",
  specializations: "",
  degree: "",
  college: "",
  yearOfCompletion: "",
  hospitalName: "",
  from: "",
  to: "",
  designation: "",
  award: "",
  year: "",
  memberships: "",
};

const PsychProfile = ({ psychProfile, addPsychProfile, loadPsychProfile }) => {
  const [profile, setProfile] = useState(initialState);

  useEffect(() => {
    if (!psychProfile) loadPsychProfile();
    if (psychProfile) {
      const profileData = { ...initialState };
      for (const key in psychProfile) {
        if (key in profileData) profileData[key] = psychProfile[key];
      }
      for (const key in psychProfile.basicInformation) {
        if (key in profileData)
          profileData[key] = psychProfile.basicInformation[key];
      }
      for (const key in psychProfile.contactDetails) {
        if (key in profileData)
          profileData[key] = psychProfile.contactDetails[key];
      }
      for (const key in psychProfile.education) {
        if (key in profileData) profileData[key] = psychProfile.education[key];
      }
      setProfile(profileData);
    }
  }, [loadPsychProfile, psychProfile]);

  const {
    firstname,
    lastname,
    address1,
    address2,
    postalCode,
    city,
    state,
    country,
    about,
    services,
    specializations,
    degree,
    college,
    yearOfCompletion,
    hospitalName,
    from,
    to,
    designation,
    award,
    year,
    memberships,
  } = profile;

  const onChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addPsychProfile(profile);
  };

  return (
    <PsychPage>
      <form onSubmit={onSubmit}>
        <div className={styles.profileCard}>
          <div className={styles.profileCardCenter}>
            <div className={styles.profileCardTitle}>
              <h4>Basic information</h4>
            </div>
            <div className={styles.profileCardForm}>
              <div>
                <label htmlFor="username">Username</label>
                <br />
                <input type="text" readOnly name="username" />
                <br />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input type="text" readOnly />
                <br />
              </div>
              <div>
                <label htmlFor="firstname">
                  First Name <span style={{ fontFamily:"Poppins",color: "red" }}>*</span>
                </label>
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
                <label htmlFor="lastname">
                  Last Name <span style={{ fontFamily: "Poppins", color: "red" }}>*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="lastname"
                  onChange={onChange}
                  value={lastname}
                />
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
                <textarea
                  name="about"
                  onChange={onChange}
                  value={about}
                ></textarea>
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
                <input
                  type="text"
                  name="address1"
                  onChange={onChange}
                  value={address1}
                />
              </div>
              <div>
                <label htmlFor="address1">Address Line 2</label>
                <input
                  type="text"
                  name="address2"
                  onChange={onChange}
                  value={address2}
                />
              </div>
              <div>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  onChange={onChange}
                  value={city}
                />
              </div>
              <div>
                <label htmlFor="state">State/province</label>
                <input
                  type="text"
                  name="state"
                  onChange={onChange}
                  value={state}
                />
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  name="country"
                  onChange={onChange}
                  value={country}
                />
              </div>
              <div>
                <label htmlFor="postalCode">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  onChange={onChange}
                  value={postalCode}
                />
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
                <label htmlFor="services">
                  Services <span style={{ fontFamily: "Poppins", color: "red" }}>*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="services"
                  onChange={onChange}
                  value={services}
                />
                <br />
                <label htmlFor="specialization">
                  Specialization <span style={{ fontFamily: "Poppins", color: "red" }}>*</span>{" "}
                </label>
                <br />
                <input
                  type="text"
                  name="specializations"
                  onChange={onChange}
                  value={specializations}
                />
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
                <label htmlFor="degree">Degree</label>
                <input
                  type="text"
                  name="degree"
                  onChange={onChange}
                  value={degree}
                />
              </div>
              <div>
                <label htmlFor="college">College/institution</label>
                <input
                  type="text"
                  name="college"
                  onChange={onChange}
                  value={college}
                />
              </div>
              <div>
                <label htmlFor="yearOfCompletion">Year of Completion</label>
                <input
                  type="text"
                  name="yearOfCompletion"
                  onChange={onChange}
                  value={yearOfCompletion}
                />
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
                <label htmlFor="hospitalName">Hospital Name</label>
                <input
                  type="text"
                  name="hospitalName"
                  onChange={onChange}
                  value={hospitalName}
                />
              </div>
              <div>
                <label htmlFor="from">From</label>
                <input
                  type="text"
                  name="from"
                  onChange={onChange}
                  value={from}
                />
              </div>
              <div>
                <label htmlFor="to">To</label>
                <input type="text" name="to" onChange={onChange} value={to} />
              </div>
              <div>
                <label htmlFor="designation">Designation</label>
                <input
                  type="text"
                  name="designation"
                  onChange={onChange}
                  value={designation}
                />
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
                <label htmlFor="awards">Awards</label>
                <input
                  type="text"
                  name="award"
                  onChange={onChange}
                  value={award}
                />
              </div>
              <div>
                <label htmlFor="year">Year</label>
                <input
                  type="text"
                  name="year"
                  onChange={onChange}
                  value={year}
                />
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
                <label htmlFor="services">Memberships</label>
                <input
                  type="text"
                  name="memberships"
                  onChange={onChange}
                  value={memberships}
                />
              </div>
            </div>
          </div>
        </div>
        <input type="submit" value="submit" />
        {/*  */}
      </form>
    </PsychPage>
  );
};

const mapStateToProps = (state) => ({
  psychProfile: state.psychProfile.psychProfile,
});

export default connect(mapStateToProps, { addPsychProfile, loadPsychProfile })(
  PsychProfile
);

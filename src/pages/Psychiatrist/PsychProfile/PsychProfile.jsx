import React, { useState } from "react";
import { connect } from "react-redux";
import { addPsychProfile } from "../../../Redux/PsychProfile/psych_profile_aciton";
import PsychPage from "../../../component/Page/PsychPage";
import styles from "./psychProfile.module.css";

const PsychProfile = ({ psychProfile, addPsychProfile }) => {
 

  const [profile, setProfile] = useState({
    firstname: "",
    lastname: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    about: "",
    services: [],
    postalCode: "",
    specializations: [],
    degree: "",
    college: "",
    yearOfCompletion: "",
    hospitalName: "",
    from: "",
    to: "",
    designation: "",
    award: "",
    year: "",
    member: "",
  });

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
    member,
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
        </div>
        {/* end of Basic  info*/}
        <div className={styles.profileCard}>
          <div className={styles.profileCardCenter}>
            <div className={styles.profileCardTitle}>
              <h4>About Me</h4>
            </div>
            <div className={styles.profileCardForm}>
              <div>
                <textarea name = "about" onChange = {onChange} value= {about}></textarea>
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
                <input type="text" name="address1" onChange = {onChange} value ={address1} />
              </div>
              <div>
                <label htmlFor="address1">Address Line 2</label>
                <input type="text" name="address" onChange = {onChange} value = {address2} />
              </div>
              <div>
                <label htmlFor="city">City</label>
                <input type="text" name="city" onChange = {onChange} value = {city} />
              </div>
              <div>
                <label htmlFor="state">State/province</label>
                <input type="text" name="state" onChange = {onChange} value = {state} />
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input type="text" name="country" onChange = {onChange} value = {country}/>
              </div>
              <div>
                <label htmlFor="address1">Postal Code</label>
                <input type="text" name="postalCode" onChange = {onChange} value={postalCode} />
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
                <input type="text" name = "services" onChange = {onChange} value = {services} />
                <br />
                <label htmlFor="specialization">Specialization</label>
                <br />
                <input type="text" name = "specialization" onChange = {onChange} value = {specializations}/>
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
                <input type="text" name = "degree" onChange = {onChange} value = {degree}/>
              </div>
              <div>
                <label htmlFor="college">College/institution</label>
                <input type="text" name = "college" onChange = {onChange} value = {college} />
              </div>
              <div>
                <label htmlFor="services">Year of Completion</label>
                <input type="text" name = "yearOfCompletion" value = {yearOfCompletion} />
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
                <input type="text" name ="hospitalName" onChange = {onChange} value = {hospitalName}/>
              </div>
              <div>
                <label htmlFor="from">From</label>
                <input type="text" name = "from" onChange = {onChange} value = {from}/>
              </div>
              <div>
                <label htmlFor="to">To</label>
                <input type="text" name = "to" onChange = {onChange} value = {to}/>
              </div>
              <div>
                <label htmlFor="designation">Designation</label>
                <input type="text" name = "designation" onChange = {onChange} value = {designation} />
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
                <input type="text" name = "awards" onChange = {onChange} value = {award}/>
              </div>
              <div>
                <label htmlFor="year">Year</label>
                <input type="text" name = "year" onChange = {onChange} value = {year} />
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
                <label htmlFor="services"  >Memberships</label>
                <input type="text" name="member" onChange={onChange} value={member} />
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
  psychProfile: state.psychProfile.profiles,
});

export default connect(mapStateToProps, { addPsychProfile })(PsychProfile);

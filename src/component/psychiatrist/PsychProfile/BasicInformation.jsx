import React,{useState} from "react";
import styles from "./psychprofile.module.css";
import { connect } from "react-redux";
import { addPsychProfile } from "../../../Redux/PsychProfile/psych_profile_aciton";

const BasicInformation = () => {

  const [basicinfo,setBasicInfo]  = useState({firstname:"",lastname:""})

  const onChange = (e) => {
      setBasicInfo({...basicinfo,[e.target.name]:e.target.value})
  }

//   onsubmit

  return (
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
                          catagory="basicInformation"
                          type="text"
                          name="firstname"
                          // value={firstname}
                        
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
      
    
  );
};

export default BasicInformation;

import React from "react";
import styles from "./psychprofile.module.css";

const Specialization = () => {
  return (
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
  );
};

export default Specialization;

import React from "react";
import styles from "./psychprofile.module.css";

const MemberShip = () => {
  return (
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
  );
};

export default MemberShip;

import React from "react";
import styles from "./psychprofile.module.css";
const ContactDetails = () => {
  return (
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
  );
};

export default ContactDetails;

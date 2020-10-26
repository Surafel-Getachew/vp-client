import React from "react";
import styles from "./overview.module.css";
const Overview = ({ profile }) => {
  const { name, specializations, city, country } = profile;
  // console.log(profile)
  return (
    <div className={styles.overvw}>
      <div className={styles.profilePic}>
        <div className={styles.profileImg}>
          <img
            src={require("../../assets/images/doctors/doctor-thumb-02.jpg")}
            alt=""
          />
        </div>
      </div>
      <div className={styles.overvwContent}>
        <h3 className={styles.title}>
          {name}
          <i className="fas fa-check-circle"></i>
        </h3>
        <p className={styles.speciality}>
          {/* {specializations[0]} */}
          {/* MDS - Periodontology and Oral Implantology, BDS */}
          {specializations}
        </p>
        <div className={styles.rating}>
          <i className="fas fa-star filled"></i>
          <i className="fas fa-star filled"></i>
          <i className="fas fa-star filled"></i>
          <i className="fas fa-star filled"></i>
          <span>(17)</span>
        </div>
        <ul className={styles.availableInfo}>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            {city},{country}
          </li>
          <li>
            <i className="fas fa-clock"></i>Available on Fri, 22 mar
          </li>
          <li>
            <i className="far fa-money-bill-alt"></i>$3000 - $10000
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;

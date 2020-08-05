import React from "react";
import styles from "./psychProfiles.module.css";

const PsychProfileItems = ({ profile }) => {
  return (
    <div>
      <div className={styles.profileCard}>
        <div className={styles.profileImg}></div>
        <div className={styles.proContent}>
          <h3 className={styles.title}>Surafel Getachew
            <i className = "fas fa-check-circle"></i>
          </h3>
          <p className = {styles.speciality}>MDS - Periodontology and Oral Implantology, BDS</p>
          <div className = {styles.rating}>
              <i className = "fas fa-star filled"></i>
              <i className = "fas fa-star filled"></i>
              <i className = "fas fa-star filled"></i>
              <i className = "fas fa-star filled"></i>
              <span>(17)</span>
          </div>
          <ul className = {styles.availableInfo}>
              <li><i className = "fas fa-map-marker-alt">"Florida,USA"</i></li>
              <li><i className = "fas fa-clock">"Available on Fri, 22 mar"</i></li>
              <li><i className = "far fa-money-bill-alt">"$3000 - $10000"</i></li>
          </ul>
          <div className = {styles.profileBtns}>
            <div className = {styles.profileViewBtn}>
                <a href="">View Profile</a>
            </div>
            <div className = {styles.bookBtn}>
                <a href="">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychProfileItems;

import React from "react";
import styles from "./psychProfiles.module.css";

const PsychProfileItems = ({ profile }) => {
  // const { basicInformation, specializations, contactDetails } = profile;
  return (
    <div className={styles.profileCardsContainer}>
      <div className={styles.profileCard}>
        <div className={styles.profileImg}>
          <a href="none">
            <img
              src={require("../../../assets/images/doctors/doctor-thumb-02.jpg")}
              alt=""
            />
          </a>
        </div>
        <div className={styles.proContent}>
          <h3 className={styles.title}>
            {/* {basicInformation.firstname } {""} {basicInformation.lastname} */}
            Surafel Getachew
            <i className="fas fa-check-circle"></i>
          </h3>
          <p className={styles.speciality}>
            {/* {specializations[0]} */}
            MDS - Periodontology and Oral Implantology, BDS
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
              <i className="fas fa-map-marker-alt"></i>AddisAbaba,Ethiopia
            </li>
            <li>
              <i className="fas fa-clock"></i>Available on Fri, 22 mar
            </li>
            <li>
              <i className="far fa-money-bill-alt"></i>$3000 - $10000
            </li>
          </ul>
          <div className={styles.profileBtns}>
            <div className={styles.profileViewBtn}>
              <a href="">View Profile</a>
            </div>
            <div className={styles.bookBtn}>
              <a href="">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profileCard}>
        <div className={styles.profileImg}>
          <a href="none">
            <img
              src={require("../../../assets/images/doctors/doctor-thumb-02.jpg")}
              alt=""
            />
          </a>
        </div>
        <div className={styles.proContent}>
          <h3 className={styles.title}>
            Surafel Getachew
            <i className="fas fa-check-circle"></i>
          </h3>
          <p className={styles.speciality}>
            MDS - Periodontology and Oral Implantology, BDS
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
              <i className="fas fa-map-marker-alt"></i>Florida,USA
            </li>
            <li>
              <i className="fas fa-clock"></i>Available on Fri, 22 mar
            </li>
            <li>
              <i className="far fa-money-bill-alt"></i>$3000 - $10000
            </li>
          </ul>
          <div className={styles.profileBtns}>
            <div className={styles.profileViewBtn}>
              <a href="">View Profile</a>
            </div>
            <div className={styles.bookBtn}>
              <a href="">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profileCard}>
        <div className={styles.profileImg}>
          <a href="none">
            <img
              src={require("../../../assets/images/doctors/doctor-thumb-02.jpg")}
              alt=""
            />
          </a>
        </div>
        <div className={styles.proContent}>
          <h3 className={styles.title}>
            {/* {basicInformation.firstname} {""} {basicInformation.lastname} */}
            <i className="fas fa-check-circle"></i>
          </h3>
          <p className={styles.speciality}>
            {/* {specializations[0]} */}
            MDS - Periodontology and Oral Implantology, BDS
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
              {/* {contactDetails.city},{contactDetails.country} */}
            </li>
            <li>
              <i className="fas fa-clock"></i>Available on Fri, 22 mar
            </li>
            <li>
              <i className="far fa-money-bill-alt"></i>$3000 - $10000
            </li>
          </ul>
          <div className={styles.profileBtns}>
            <div className={styles.profileViewBtn}>
              <a href="">View Profile</a>
            </div>
            <div className={styles.bookBtn}>
              <a href="">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profileCard}>
        <div className={styles.profileImg}>
          <a href="none">
            <img
              src={require("../../../assets/images/doctors/doctor-thumb-02.jpg")}
              alt=""
            />
          </a>
        </div>
        <div className={styles.proContent}>
          <h3 className={styles.title}>
            Surafel Getachew
            <i className="fas fa-check-circle"></i>
          </h3>
          <p className={styles.speciality}>
            MDS - Periodontology and Oral Implantology, BDS
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
              <i className="fas fa-map-marker-alt"></i>Florida,USA
            </li>
            <li>
              <i className="fas fa-clock"></i>Available on Fri, 22 mar
            </li>
            <li>
              <i className="far fa-money-bill-alt"></i>$3000 - $10000
            </li>
          </ul>
          <div className={styles.profileBtns}>
            <div className={styles.profileViewBtn}>
              <a href="">View Profile</a>
            </div>
            <div className={styles.bookBtn}>
              <a href="">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profileCard}>
        <div className={styles.profileImg}>
          <a href="none">
            <img
              src={require("../../../assets/images/doctors/doctor-thumb-02.jpg")}
              alt=""
            />
          </a>
        </div>
        <div className={styles.proContent}>
          <h3 className={styles.title}>
            {/* {basicInformation.firstname} {""} {basicInformation.lastname} */}
            <i className="fas fa-check-circle"></i>
          </h3>
          <p className={styles.speciality}>
            {/* {specializations[0]} */}
            MDS - Periodontology and Oral Implantology, BDS
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
              {/* {contactDetails.city},{contactDetails.country} */}
            </li>
            <li>
              <i className="fas fa-clock"></i>Available on Fri, 22 mar
            </li>
            <li>
              <i className="far fa-money-bill-alt"></i>$3000 - $10000
            </li>
          </ul>
          <div className={styles.profileBtns}>
            <div className={styles.profileViewBtn}>
              <a href="">View Profile</a>
            </div>
            <div className={styles.bookBtn}>
              <a href="">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profileCard}>
        <div className={styles.profileImg}>
          <a href="none">
            <img
              src={require("../../../assets/images/doctors/doctor-thumb-02.jpg")}
              alt=""
            />
          </a>
        </div>
        <div className={styles.proContent}>
          <h3 className={styles.title}>
            Surafel Getachew
            <i className="fas fa-check-circle"></i>
          </h3>
          <p className={styles.speciality}>
            MDS - Periodontology and Oral Implantology, BDS
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
              <i className="fas fa-map-marker-alt"></i>Florida,USA
            </li>
            <li>
              <i className="fas fa-clock"></i>Available on Fri, 22 mar
            </li>
            <li>
              <i className="far fa-money-bill-alt"></i>$3000 - $10000
            </li>
          </ul>
          <div className={styles.profileBtns}>
            <div className={styles.profileViewBtn}>
              <a href="">View Profile</a>
            </div>
            <div className={styles.bookBtn}>
              <a href="">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profileCard}>
        <div className={styles.profileImg}>
          <a href="none">
            <img
              src={require("../../../assets/images/doctors/doctor-thumb-02.jpg")}
              alt=""
            />
          </a>
        </div>
        <div className={styles.proContent}>
          <h3 className={styles.title}>
            {/* {basicInformation.firstname} {""} {basicInformation.lastname} */}
            JonDoe
            <i className="fas fa-check-circle"></i>
          </h3>
          <p className={styles.speciality}>
            {/* {specializations[0]} */}
            MDS - Periodontology and Oral Implantology, BDS
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
              {/* {contactDetails.city},{contactDetails.country} */}
            </li>
            <li>
              <i className="fas fa-clock"></i>Available on Fri, 22 mar
            </li>
            <li>
              <i className="far fa-money-bill-alt"></i>$3000 - $10000
            </li>
          </ul>
          <div className={styles.profileBtns}>
            <div className={styles.profileViewBtn}>
              <a href="">View Profile</a>
            </div>
            <div className={styles.bookBtn}>
              <a href="">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profileCard}>
        <div className={styles.profileImg}>
          <a href="none">
            <img
              src={require("../../../assets/images/doctors/doctor-thumb-02.jpg")}
              alt=""
            />
          </a>
        </div>
        <div className={styles.proContent}>
          <h3 className={styles.title}>
            Surafel Getachew
            <i className="fas fa-check-circle"></i>
          </h3>
          <p className={styles.speciality}>
            MDS - Periodontology and Oral Implantology, BDS
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
              <i className="fas fa-map-marker-alt"></i>Florida,USA
            </li>
            <li>
              <i className="fas fa-clock"></i>Available on Fri, 22 mar
            </li>
            <li>
              <i className="far fa-money-bill-alt"></i>$3000 - $10000
            </li>
          </ul>
          <div className={styles.profileBtns}>
            <div className={styles.profileViewBtn}>
              <a href="">View Profile</a>
            </div>
            <div className={styles.bookBtn}>
              <a href="">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profileCard}>
        <div className={styles.profileImg}>
          <a href="none">
            <img
              src={require("../../../assets/images/doctors/doctor-thumb-02.jpg")}
              alt=""
            />
          </a>
        </div>
        <div className={styles.proContent}>
          <h3 className={styles.title}>
            {/* {basicInformation.firstname} {""} {basicInformation.lastname} */}
            Alexis sanches
            <i className="fas fa-check-circle"></i>
          </h3>
          <p className={styles.speciality}>
            {/* {specializations[0]} */}
            MDS - Periodontology and Oral Implantology, BDS
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
              {/* {contactDetails.city},{contactDetails.country} */}
            </li>
            <li>
              <i className="fas fa-clock"></i>Available on Fri, 22 mar
            </li>
            <li>
              <i className="far fa-money-bill-alt"></i>$3000 - $10000
            </li>
          </ul>
          <div className={styles.profileBtns}>
            <div className={styles.profileViewBtn}>
              <a href="">View Profile</a>
            </div>
            <div className={styles.bookBtn}>
              <a href="">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profileCard}>
        <div className={styles.profileImg}>
          <a href="none">
            <img
              src={require("../../../assets/images/doctors/doctor-thumb-02.jpg")}
              alt=""
            />
          </a>
        </div>
        <div className={styles.proContent}>
          <h3 className={styles.title}>
            Surafel Getachew
            <i className="fas fa-check-circle"></i>
          </h3>
          <p className={styles.speciality}>
            MDS - Periodontology and Oral Implantology, BDS
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
              <i className="fas fa-map-marker-alt"></i>Florida,USA
            </li>
            <li>
              <i className="fas fa-clock"></i>Available on Fri, 22 mar
            </li>
            <li>
              <i className="far fa-money-bill-alt"></i>$3000 - $10000
            </li>
          </ul>
          <div className={styles.profileBtns}>
            <div className={styles.profileViewBtn}>
              <a href="">View Profile</a>
            </div>
            <div className={styles.bookBtn}>
              <a href="">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychProfileItems;

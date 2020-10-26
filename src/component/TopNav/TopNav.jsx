import React from "react";
import { Input } from "antd";
import styles from "./topnav.module.css";
const { Search } = Input;
const TopNav = () => {
  return (
    <div className={styles.topNavContainer}>
      <div className={styles.search}>
        {/* <i className="fas fa-search"></i>
        <span>Search...</span> */}
        {/* <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    /> */}
        <Search
          placeholder="input search text"
          onSearch={(value) => console.log(value)}
          enterButton
        />
      </div>
      <div className={styles.profileContainer}>
        <i className="fas fa-bell"></i>
        <div className={styles.aviContainer}>
          <img
            alt="Avi"
            className={styles.avi}
            // src={require("../../assets/doctor-thumb-02.jpg")}
            src={require("../../assets/images/doctors/doctor-thumb-02.jpg")}
          ></img>
        </div>
        <span>Emma watson</span>
      </div>
    </div>
  );
};

export default TopNav;

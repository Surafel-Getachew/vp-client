import React from "react";
import Topnav from "./TopNav/Topnav";
import Navbar from "./Navbar/Navbar";
import styles from "./layout.module.css";
const Layout = (props) => {
  return (
    <div className={styles.adminContainer}>
      <div className = {styles.sideNav}>
        <Navbar />
      </div>
      <div className={styles.sidePage}>
        <Topnav />
        <div className={styles.childPage}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

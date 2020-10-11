import React from "react";
import TopNav from "../TopNav/TopNav";
import Navbar from "../Navbar/Navbar";
import styles from "./layout.module.css";
const Layout = (props) => {
  return (
    <div className={styles.Container}>
      <Navbar className={styles.nav} />
      <div className={styles.appContainer}>
        <TopNav className={styles.topNav} />
        <div className={styles.childPage}>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;

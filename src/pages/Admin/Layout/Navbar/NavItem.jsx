import React from "react";
import { Link } from "react-router-dom";
import styles from "./navItem.module.css";
const NavItem = (props) => {
  const { name, path, icon, activ } = props;
  let iconColor;
  activ ? (iconColor = "#af8bf8") : (iconColor = "#e1e1e9");
  return (
    <Link className={styles.navItemCnt} to = {path}>
      <div className={styles.navIcon}>
        <i style={{ color: [iconColor] }} className={icon}></i>
      </div>
      <div className={styles.navName}>
        <p style={{ color: [iconColor] }}>{name}</p>
      </div>
    </Link>
  );
};

export default NavItem;

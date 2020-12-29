import React from "react";
import { Link } from "react-router-dom";
import styles from "./navitem.module.css";
const NavItem = (props) => {
  const { name, icon, path, active } = props;
  let navCss;
  let itemColor;
  active ? (navCss = "navItemSelected") : (navCss = "navItemCnt");
  active ? (itemColor = "#ffff") : (itemColor = "#fff");
  return (
    <Link to={path}>
      <div className={styles[navCss]}>
        <div className={styles.navIcon}>
          <i style={{ color: [itemColor] }} className={icon}></i>
        </div>
        <div className={styles.navItemName}>
          <h4 style={{ color: [itemColor] }}>{name}</h4>
        </div>
      </div>
    </Link>
  );
};

export default NavItem;

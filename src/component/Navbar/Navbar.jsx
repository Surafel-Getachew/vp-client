import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import NavItem from "./NavItem";
import styles from "./navbar.module.css";
const Navbar = () => {
  const [active, setActive] = useState("/");
  const { pathname } = useLocation();
  // console.log("pathname",pathname);
  const authContext = useContext(AuthContext);
  const { loadPsychiatrist, user } = authContext;
  const { _id } = user;
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);
  useEffect(() => {
    loadPsychiatrist();
  }, []);
  const navItems = [
    {
      name: "Dashboard",
      icon: "fas fa-columns",
      to: "/vp/psychiatrist/dashboard",
      key: 1,
    },
    {
      name: "Schedule",
      icon: "fas fa-calendar-check",
      to: "/vp/psychiatrist/schedule",
      key: 2,
    },
    {
      name: "Message",
      icon: "fas fa-envelope",
      to: `/vp/psychiatrist/message/${_id}`,
      key: 8,
    },
    {
      name: "Group Video Chat",
      icon: "fas fa-users",
      to: "/vp/psychiatrist/groupvideochat",
      key: 3,
    },
    {
      name: "Article",
      icon: "fas fa-newspaper",
      to: "/vp/psychiatrist/article",
      key: 4,
    },
    {
      name: "Video Chat",
      icon: "fas fa-video",
      to: "/vp/psychiatrist/videochat",
      key: 5,
    },
    {
      name: "Profile Setting",
      icon: "fas fa-user-cog",
      to: "/vp/psychiatrist/profile-setting",
      key: 6,
    },
    {
      name: "Change Password",
      icon: "fas fa-lock",
      to: "/vp/psychiatrist/change-password",
      key: 7,
    },
  ];

  return (
    <div className={styles.navContainer}>
      <h2 className={styles.logo}>VP</h2>
      <div className={styles.reg}>Register Patient +</div>
      <div className={styles.navItemContainer}>
        {navItems.map((item) => (
          <NavItem
            path={item.to}
            name={item.name}
            icon={item.icon}
            key={item.key}
            activ={item.to === active}
            // onclick={onItemClick}
          />
        ))}
      </div>
      <div className={styles.svgContainer}>
        <img src={require("../../assets/mobile-app.svg")} alt="mobile app" />
        <h6>Download Mobile App</h6>
      </div>
    </div>
  );
};

export default Navbar;

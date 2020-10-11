import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import NavItem from "./NavItem";
import styles from "./navbar.module.css";
const Navbar = () => {
  const [active, setActive] = useState("/");
  const { pathname } = useLocation();
  // console.log("pathname",pathname);
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);
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
      name: "Group Video Chat",
      icon: "fas fa-users",
      to: "/vp/psychiatirst/group-therapy",
      key: 3,
    },
    {
      name: "Article",
      icon: "fas fa-newspaper",
      to: "/vp/psychiatrist/article",
      key: 4,
    },
    {
      name: "VideoChat",
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
    {
      name: "Chats",
      icon: "far fa-comment",
      to:"/vp/psychiatrist/chats",
      key:8,
    }
  ];

  return (
    <div className={styles.navContainer}>
      <h2 className={styles.logo}>Logo</h2>
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

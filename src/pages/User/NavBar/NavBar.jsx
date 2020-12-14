import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import styles from "./navbar.module.css";
import styles from "./navbar.module.css";
import NavItem from "./NavItem";
const NavBar = () => {
  const [active, setActive] = useState("/");
  const { pathname } = useLocation();
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);
  const navItems = [
    {
      name: "Schedule",
      icon: "fas fa-calendar-check",
      to: "/vp/user/appointment",
      key: 2,
    },
    {
      name: "Doctors",
      icon: "fas fa-user-md",
      to: "/vp/user/psychiatrists",
      key: 2,
    },
    {
      name: "Dashboard",
      icon: "fas fa-columns",
      to: "/vp/user/dashboard",
      key: 1,
    },
    {
      name: "Message",
      icon: "fas fa-envelope",
      to: "/vp/psychiatrist/message",
      key: 8,
    },
    // {
    //   name: "Group Video Chat",
    //   icon: "fas fa-users",
    //   to: "/vp/psychiatirst/group-therapy",
    //   key: 3,
    // },
    {
      name: "Article",
      icon: "fas fa-newspaper",
      to: "/vp/psychiatrist/article",
      key: 4,
    },
    // {
    //   name: "VideoChat",
    //   icon: "fas fa-video",
    //   to: "/vp/psychiatrist/videochat",
    //   key: 5,
    // },
    // {
    //   name: "Profile Setting",
    //   icon: "fas fa-user-cog",
    //   to: "/vp/psychiatrist/profile-setting",
    //   key: 6,
    // },
    // {
    //   name: "Change Password",
    //   icon: "fas fa-lock",
    //   to: "/vp/psychiatrist/change-password",
    //   key: 7,
    // },
  ];
  return (
    <div className={styles.sideNavCnt}>
      <div className={styles.profileCnt}>
        <div className={styles.aviCnt}>
          <img src={require("../../../assets/person5.jpg")} alt="avi" />
        </div>
        <div className={styles.profileName}>
          <h3>Surafel Getachew</h3>
        </div>
      </div>
      <div className={styles.navItemsCnt}>
        {navItems.map((item) => (
          <NavItem
            path={item.to}
            name={item.name}
            icon={item.icon}
            key={item.key}
            active={item.to === active}
          />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default NavBar;

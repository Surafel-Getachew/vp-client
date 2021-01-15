import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import styles from "./navbar.module.css";
const Navbar = () => {
  const [active, setActive] = useState("/");
  const { pathname } = useLocation();
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);
  const navItems = [
    {
      name: "Dashboard",
      icon: "fas fa-columns",
      to: "/vp/admin/dashboard",
      key: 1,
    },
    {
      name: "Psychiatrists",
      icon: "fas fa-calendar-check",
      to: "/vp/admin/psychiatrists",
      key: 9,
    },
    {
      name: "Schedule",
      icon: "fas fa-calendar-check",
      to: "/vp/admin/schedule",
      key: 2,
    },
    // {
    //   name: "Message",
    //   icon: "fas fa-envelope",
    //    to: `/vp/admin/message/${_id}`,
    //   key: 8,
    // },
    {
      name: "Group Video Chat",
      icon: "fas fa-users",
      to: "/vp/admin/groupvideochat",
      key: 3,
    },
    {
      name: "Article",
      icon: "fas fa-newspaper",
      to: "/vp/admin/article",
      key: 4,
    },
    {
      name: "Video Chat",
      icon: "fas fa-video",
      to: "/vp/admin/videochat",
      key: 5,
    },
    {
      name: "Profile Setting",
      icon: "fas fa-user-cog",
      to: "/vp/admin/profile-setting",
      key: 6,
    },
    {
      name: "Change Password",
      icon: "fas fa-lock",
      to: "/vp/admin/change-password",
      key: 7,
    },
  ];
  return (
    <div className={styles.navCnt}>
      <h2 className={styles.logo}>Virtual Psychiatrist</h2>
      <div className={styles.navItemCnt}>
        {navItems.map((item) => (
          <NavItem
            path={item.to}
            name={item.name}
            icon={item.icon}
            key={item.key}
            activ={item.to === active}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;

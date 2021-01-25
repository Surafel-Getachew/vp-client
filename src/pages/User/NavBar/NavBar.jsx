import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import AuthContext from "../../../context/auth/authContext";
import { storeClientInfo } from "../../../Redux/VideoCall/video_call_action";
import { getUserProfile } from "../../../Redux/UserProfile/userProfile_action";
import styles from "./navbar.module.css";
import NavItem from "./NavItem";
const NavBar = (props) => {
  const { storeClientInfo, getUserProfile, userProfile } = props;
  // const { avatar } = userProfile;
  const authContext = useContext(AuthContext);
  const { loadUser, user } = authContext;
  const [active, setActive] = useState("/");
  const { pathname } = useLocation();
  useEffect(() => {
    loadUser();
  }, []);
  const { _id, name } = user;

  useEffect(() => {
    if (_id !== undefined) {
      storeClientInfo(_id);
    }
  }, [_id]);
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);
  useEffect(() => {
    if (_id !== undefined) {
      getUserProfile(_id);
    }
  }, [_id]);
  const navItems = [
    {
      name: "Dashboard",
      icon: "fas fa-columns",
      to: "/vp/user/dashboard",
      key: 1,
    },
    {
      name: "Doctors",
      icon: "fas fa-user-md",
      to: "/vp/user/psychiatrists",
      key: 2,
    },

    {
      name: "Article",
      icon: "fas fa-newspaper",
      to: "/vp/user/article",
      key: 4,
    },
    {
      name: "Message",
      icon: "fas fa-envelope",
      to: "/vp/user/message",
      key: 8,
    },
    {
      name: "Group Video Chat",
      icon: "fas fa-users",
      to: "/vp/user/group-video-chat",
      key: 3,
    },
    // {
    //   name: "VideoChat",
    //   icon: "fas fa-video",
    //   to: "/vp/user/videochat",
    //   key: 5,
    // },
    {
      name: "Profile Setting",
      icon: "fas fa-user-cog",
      to: "/vp/user/profile-setting",
      key: 6,
    },
    {
      name: "Change Password",
      icon: "fas fa-lock",
      to: "/vp/user/change-password",
      key: 7,
    },
  ];
  return (
    <div className={styles.sideNavCnt}>
      <div className={styles.profileCnt}>
        <div className={styles.aviCnt}>
          {/* <img src={require("../../../assets/person2.jpg")} alt="avi" /> */}
          {userProfile === null ? (
            <img
              alt="Avi"
              src={require("../../../assets/profilepic.jpeg")}
            ></img>
          ) : (
            <img
              className={styles.avi}
              src={`data:image/jpeg;base64,${userProfile.avatar}`}
              alt="Avatar"
            />
          )}
        </div>
        <div className={styles.profileName}>
          {/* <h3>Surafel Getachew</h3> */}
          <h3>{name}</h3>
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
const mapStateToProps = (state) => ({
  userProfile: state.userProfile.userProfile,
});

export default connect(mapStateToProps, {
  storeClientInfo,
  getUserProfile,
})(NavBar);

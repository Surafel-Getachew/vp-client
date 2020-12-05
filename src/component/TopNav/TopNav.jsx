import React, { useEffect, useContext, useState } from "react";
import {connect} from "react-redux";
import { Redirect } from "react-router-dom";
import {storeClientInfo} from "../../Redux/VideoCall/video_call_action";
import AuthContext from "../../context/auth/authContext";
import { Input, Menu, Dropdown } from "antd";
import styles from "./topnav.module.css";
import { DownOutlined } from "@ant-design/icons";
const { Search } = Input;

const TopNav = (props) => {
  const {storeClientInfo} = props
  const authContext = useContext(AuthContext);
  const { loadPsychiatrist, user, psychiatristLogout } = authContext;
  const { redirect, setRedirect } = useState(false);
  const { name,_id } = user;
  useEffect(() => {
    loadPsychiatrist();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if(_id !== undefined)
    storeClientInfo(_id);
  },[user])
  
  const onLogout = () => {
    psychiatristLogout();
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/vp/psychiatrist/signin" />;
  }
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          Change Password
        </a>
      </Menu.Item>
      <Menu.Item danger onClick={onLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.topNavContainer}>
      <div className={styles.search}>
        <Search
        // style = {{width:"600px"}}
        className = {styles.searchInput}
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
            src={require("../../assets/images/doctors/doctor-thumb-02.jpg")}
          ></img>
        </div>
      
        <Dropdown overlay={menu} className={styles.dropdown}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            {name} <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps,{
  storeClientInfo
})(TopNav);


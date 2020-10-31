import React from "react";
import { Input,Menu,Dropdown} from "antd";
import styles from "./topnav.module.css";
import { DownOutlined } from '@ant-design/icons';
const { Search } = Input;
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Change Password
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>Logout</Menu.Item>
  </Menu>
);

const TopNav = () => {
  return (
    <div className={styles.topNavContainer}>
      <div className={styles.search}>
        <Search
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
            // src={require("../../assets/doctor-thumb-02.jpg")}
            src={require("../../assets/images/doctors/doctor-thumb-02.jpg")}
          ></img>
        </div>
        {/* <span>Emma watson</span> */}
          <Dropdown overlay={menu} className = {styles.dropdown}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Emma watson <DownOutlined />
      </a>
  </Dropdown>
      </div>
    </div>
  );
};

export default TopNav;

  {/* <i className="fas fa-search"></i>
        <span>Search...</span> */}
        {/* <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    /> */}
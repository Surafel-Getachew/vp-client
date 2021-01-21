import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import AdminAuthContext from "../../../../context/adminAuth/adminAuthContext";
import { Menu, Dropdown } from "antd";
import styles from "./topNav.module.css";
import { DownOutlined } from "@ant-design/icons";
const TopNav = (props) => {
  const adminAuthContext = useContext(AdminAuthContext);
  const { loadAdmin, admin, logoutAdmin } = adminAuthContext;
  const onLogout = () => {
    logoutAdmin();
    props.history.push("/vp/admin/signin");
  };
  const { name, _id } = admin;
  useEffect(() => {
    loadAdmin();
  }, []);
  const menu = (
    <Menu>
      <Menu.Item danger onClick={onLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.topNavCnt}>
      <div className={styles.topNavContentCnt}>
        <div className={styles.profileCnt}>
          <i className="fas fa-bell"></i>
          <div className={styles.aviCnt}>
            <img
              src={require("../../../../assets/doctor-thumb-02.jpg")}
              alt=""
            />
          </div>
          <Dropdown
            overlay={menu}
            className={styles.dropdown}
            style={{ color: "#e1e1e9" }}
          >
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              {name} <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default withRouter(TopNav);

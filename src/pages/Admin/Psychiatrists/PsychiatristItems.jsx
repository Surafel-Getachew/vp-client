import React, { useContext } from "react";
import AuthContext from "../.../../../../context/auth/authContext";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import {
  DeleteOutlined,
  EyeOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import styles from "./psychItems.module.css";
const { confirm } = Modal;
const PsychiatristItems = (props) => {
  const { name, avatar, psychOwner, email } = props.profile;
  const authContext = useContext(AuthContext);
  const { deletePsychiatrist } = authContext;
  function showDeleteConfirm() {
    confirm({
      title: "Are you sure delete this Psychiatrist?",
      icon: <ExclamationCircleOutlined />,
      content: "Once deleted it can't be reversed",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deletePsychiatrist(psychOwner);
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }
  return (
    <div className={styles.psychItemsCnt}>
      <div className={styles.profileCnt}>
        <div className={styles.aviContainer}>
          {avatar == null ? (
            <img
              src={require("../../../assets/profilepic.jpeg")}
              alt="avatar"
            />
          ) : (
            <img src={`data:image/jpeg;base64,${avatar}`} alt="avatar" />
          )}
        </div>
        <div className={styles.psychName}>
          <h3>{name}</h3>
        </div>
      </div>
      <div className={styles.psychEmail}>
        {/* <h3>{psychCredential == null || psychCredential == undefined ? "Loading" : prof.email}</h3> */}
        <h3>{email}</h3>
      </div>
      <div className={styles.psychActions}>
        <div className={styles.viewProfileCnt}>
          <EyeOutlined className={styles.viewIcon} />
          <h4>
            <Link
              className={styles.viewProfileLink}
              to={{
                pathname: "/vp/psychiatrist/detail-profile",
                state: {
                  id: psychOwner,
                },
              }}
            >
              View Profile
            </Link>
          </h4>
        </div>
        <div className={styles.deleteCnt} onClick={showDeleteConfirm}>
          <DeleteOutlined className={styles.deleteIcon} />
          <h4>Delete Psychiatrsit</h4>
        </div>
      </div>
    </div>
  );
};

export default PsychiatristItems;
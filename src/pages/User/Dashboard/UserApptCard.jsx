import React from "react";
import styles from "./userApptCard.module.css";
import { DeleteOutlined } from "@ant-design/icons";
const UserApptCard = () => {
  return (
    <div className={styles.userApptCard}>
      <div className={styles.profileCnt}>
        <div className={styles.imgCnt}>
          <img src={require("../../../assets/doctor-thumb-02.jpg")} alt="" />
        </div>
        <h4>Surafel Getachew</h4>
      </div>
      <div className={styles.timeCnt}>
        <div className = {styles.startTime}>
          <h3>3:00</h3>
        </div>
        <div className = {styles.endTime}>
          <h3>4:00</h3>
        </div>
      </div>
      <div className={styles.actionCnt}>
        <DeleteOutlined className={styles.deleteIcon} />
        <h4>Delete Schedule</h4>
      </div>
    </div>
  );
};

export default UserApptCard;

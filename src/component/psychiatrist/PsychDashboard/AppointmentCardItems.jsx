import React from "react";
import styles from "./apptCardItems.module.css";
import { CheckCircleOutlined } from "@ant-design/icons";
const AppointmentCardItems = ({ name, avi }) => {
  return (
    <div>
      <div className={styles.apptCardItem}>
        <div className={styles.apptCardAvi}>
          <img
            src={avi}
            // src={require("../../../assets/person8.jpg")}
            alt="Avi"
          />
        </div>
        <div className={styles.apptCardName}>
          <h5>
            <b>{name}</b>{" "}
          </h5>
          {/* <h6 className = {styles.apptStatus}>Completed</h6> */}
        </div>
        <div className={styles.apptCardTime}>
          <CheckCircleOutlined
            style={{ display: "inline", color: "#703BDA", marginRight: "5px" }}
          />{" "}
          <h5 style={{ display: "inline" }}>8:00 AM</h5>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default AppointmentCardItems;

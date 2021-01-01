import React from "react";
import styles from "./roomItem.module.css";
const RoomDescription = (props) => {
  const { title, value } = props;
  return (
    <div>
      <div className={styles.roomContent}>
        <div className={styles.roomTitle}>
          <h4>{title}</h4>
        </div>
        <div className={styles.roomValue}>
          <h5>{value}</h5>
        </div>
      </div>
    </div>
  );
};

export default RoomDescription;

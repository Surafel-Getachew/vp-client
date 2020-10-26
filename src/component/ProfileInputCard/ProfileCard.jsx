import React from "react";
import styles from "./profileCard.module.css";

const ProfileCard = (props) => {
  const { title } = props;
  return (
    <div className={styles.inputCard}>
      <div>
        <h3
          style={{ marginLeft: "10px", color: "#703BDA" }}
          className={styles.cardTitle}
        >
          {title}
        </h3>
      </div>
      <div className={styles.cardInputs}>{props.children}</div>
    </div>
  );
};

export default ProfileCard;

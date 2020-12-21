import React, { useEffect, useState } from "react";
import styles from "./usernameavi.module.css";
const UserNameAvi = (props) => {
  const { name, avatar, id } = props;
  return (
    <div className={styles.cardCnt}>
      <div className={styles.avatarCnt}>
        {avatar === undefined ? (
          <img src={require("../../../assets/profilepic.jpeg")} alt="avarar" />
        ) : (
          <img src={`data:image/jpeg;base64,${avatar}`} />
        )}
      </div>
      <div className={styles.nameMsgCnt}>
        <h4>{name}</h4>
        <p>Last message sent.</p>
      </div>
    </div>
  );
};

export default UserNameAvi;

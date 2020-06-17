import React from "react";
import PsychNav from "../psychiatrist/PsychNav/PsychNav";
import styles from "./psychPage.module.css";

const PsychPage = (props) => {
  return (
    <div className={styles.psychPage}>
      <div className={styles.psychPageCenter}>
        <PsychNav />
        {props.children}
      </div>
    </div>
  );
};

export default PsychPage;

import React from "react";
import styles from "./psychPage.module.css";
import PsychNav from "../psychiatrist/PsychNav/PsychNav";

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

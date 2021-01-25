import React from "react";
import UserPage from "../../../component/Page/User/UserPage";
import PsychiatristProfiles from "../../../component/Profiles/Psychiatrist/PsychiatristProfiles";
import Layout from "../Layout/Layout";
import styles from "./psychList.module.css";
const PsychiatristList = () => {
  return (
    <Layout>
      <div className={styles.psychListCnt}>
        <div className = {styles.list}>
          <h3>List of Psychiatrist</h3>
          <PsychiatristProfiles />
        </div>
      </div>
    </Layout>
  );
};

export default PsychiatristList;

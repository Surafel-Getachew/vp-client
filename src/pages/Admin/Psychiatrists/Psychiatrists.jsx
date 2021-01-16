import React, { useEffect, useContext } from "react";
import AuthContext from "../../../context/auth/authContext";
import { connect } from "react-redux";
import { loadAllPsychsBasicProfile } from "../../../Redux/PsychProfile/psych_profile_aciton";
import { Input } from "antd";
import Layout from "../Layout/Layout";
import PsychiatristItems from "./PsychiatristItems";
import styles from "./psychs.module.css";
const { Search } = Input;
const Psychiatrists = (props) => {
  const authContext = useContext(AuthContext);
  const { refresh } = authContext;
  const { loadAllPsychsBasicProfile, psychsBasicProfile } = props;
  useEffect(() => {
    loadAllPsychsBasicProfile();
  },[refresh]);
  useEffect(() => {
    loadAllPsychsBasicProfile();
  }, []);
  return (
    <Layout>
      <div className={styles.psychsCont}>
        <div className={styles.searchCnt}>
          <Search
            placeholder="input search text"
            allowClear
            // value={searchValue}
            // onChange={onSearchChange}
            // onSearch={onSearch}
            enterButton
            style={{ width: 200, margin: "0 10px" }}
          />
        </div>
        <div className={styles.psychListTitle}>
          <div className={styles.listName}>
            <h3>Name</h3>
          </div>
          <div className={styles.listEmail}>
            <h3>Email</h3>
          </div>
          <div className={styles.listActions}>
            <h3>Actions</h3>
          </div>
        </div>
        {psychsBasicProfile.map((profile) => (
          <PsychiatristItems profile={profile} />
        ))}
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  psychsBasicProfile: state.psychProfile.psychsBasicProfile,
});

export default connect(mapStateToProps, {
  loadAllPsychsBasicProfile,
})(Psychiatrists);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadTodaysAppt } from "../../../Redux/UserAppointment/user_appt_action";
import styles from "./userApptHeader.module.css";
import UserApptCard from "./UserApptCard";
const UserApptHeader = (props) => {
  const { currentTab, loadTodaysAppt, todaysAppt } = props;
  
  useEffect(() => {
    loadTodaysAppt(currentTab);
  }, [currentTab]);

  console.log(todaysAppt);

  return (
    <div>
      <div className={styles.userApptHeader}>
        <div className={styles.psychProfile}>
          <h3>Psychiatrist Profile</h3>
        </div>
        <div className={styles.startTime}>
          <h3>Start Time</h3>
        </div>
        <div className={styles.startTime}>
          <h3>End Time</h3>
        </div>
        <div className={styles.action}>
          <h3>Action</h3>
        </div>
      </div>
      {todaysAppt !== null ? (
        todaysAppt.map((appt) => (
          <UserApptCard appt={appt} />
        ))
      ): ("loading")}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todaysAppt: state.userAppt.todaysAppt,
});

export default connect(mapStateToProps, {
  loadTodaysAppt,
})(UserApptHeader);

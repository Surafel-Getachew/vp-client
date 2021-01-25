import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadTodaysAppt } from "../../../Redux/UserAppointment/user_appt_action";
import styles from "./userApptHeader.module.css";
import UserApptCard from "./UserApptCard";
const UserApptHeader = (props) => {
  const { currentTab, loadTodaysAppt, todaysAppt,refresh} = props;
  
  useEffect(() => {
    loadTodaysAppt(currentTab);
  }, [currentTab]);
  useEffect(() => {
    loadTodaysAppt(currentTab);
  }, [refresh]);
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
          <UserApptCard appt={appt} day = {currentTab}/>
        ))
      ): (<h3 style = {{display:"flex",justifyContent:"center",height:"100px",alignItems:"center"}}>NO APPOINTMENT TODAY</h3>)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todaysAppt: state.userAppt.todaysAppt,
  refresh: state.userAppt.refresh,
});

export default connect(mapStateToProps, {
  loadTodaysAppt,
})(UserApptHeader);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadTodaysAppt } from "../../../Redux/UserAppointment/user_appt_action";
const UserAppt = (props) => {
  const { currentTab,loadTodaysAppt} = props;
  useEffect(() => {
    loadTodaysAppt(currentTab);
  }, [currentTab]);
  return (
    <div>
      <h1>List of User Appt</h1>
      <h4>{currentTab}</h4>
    </div>
  );
};

const mapStateToProps = (state) => ({
    todaysAppt:state.userAppt.todaysAppt
})

export default connect(mapStateToProps,{
    loadTodaysAppt
})(UserAppt);

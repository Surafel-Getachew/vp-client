import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getPsychAppointment } from "../../../Redux/PsychAppointment/psych_appointment_action";
import { callUser } from "../../../Redux/VideoCall/video_call_action";
import AuthContext from "../../../context/auth/authContext";
import styles from "./videoChatList.module.css";
import ListOfUsers from "./ListOfUsers";
const VideoChatList = (props) => {
  const authContext = useContext(AuthContext);
  const { loadPsychiatrist, user } = authContext;
  const { date, getPsychAppointment, psychAppointment, callUser } = props;
  const [appointment, setAppointment] = useState([]);
  const [redirect, setRedirect] = useState({
    redirectTo: "",
    redirectValue: false,
  });
  const { redirectTo, redirectValue } = redirect;
  useEffect(() => {
    loadPsychiatrist();
    // eslint-disable-next-line
  }, []);

  console.log("The date", date);
  const { _id, name } = user;
  useEffect(() => {
    getPsychAppointment(date);
  }, []);
  useEffect(() => {
    if (!psychAppointment) {
      getPsychAppointment(date);
    } else {
      setAppointment(psychAppointment);
    }
  }, [psychAppointment, date]);
  const onCall = (e) => {
    callUser(e.target.value, _id);
    setRedirect({
      ...redirect,
      redirectTo: e.target.value,
      redirectValue: true,
    });
  };
  if (redirectValue) {
    return (
      <Redirect
        to={{
          pathname: "/vp/videocall",
          // state: { id: redirectTo },
          state: { id: _id, name: name },
        }}
      />
    );
  }

  return (
    <div className = {styles.videoChatListCnt}>
      {appointment.map((appt) => (
        <ListOfUsers key = {appt._id} apptBy = {appt.appointedBy} date = {date}/>
      ))}      
    </div>
  );
};

const mapStateToProps = (state) => ({
  psychAppointment: state.psychAppointment.psychAppointment,
});

export default connect(mapStateToProps, {
  getPsychAppointment,
  callUser,
})(VideoChatList);

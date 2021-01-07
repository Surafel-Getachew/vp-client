import React, { useEffect, useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AuthContext from "../../../context/auth/authContext";
import { getAppointedUsersProfile } from "../../../Redux/PsychAppointment/psych_appointment_action";
import { callUser } from "../../../Redux/VideoCall/video_call_action";
import styles from "./listOfUsers.module.css";
const ListOfUser = (props) => {
  const authContext = useContext(AuthContext);
  const { loadPsychiatrist, user } = authContext;
  const [redirect, setRedirect] = useState({
    redirectTo: "",
    redirectValue: false,
  });
  const {redirectTo,redirectValue} = redirect
  const {
    apptBy,
    date,
    getAppointedUsersProfile,
    appointedUsersProfile,
    callUser
  } = props;
  useEffect(() => {
    loadPsychiatrist();
  }, []);
  const { _id, name } = user;
  useEffect(() => {
    getAppointedUsersProfile(date);
  }, [date]);
  // console.log("The date is ", date);
  const onClick = (e) => {
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
          state: { id: _id, name: name },
          // state: { id: redirectTo },
        }}
      />
    );
  }
  return (
    <div>
      {appointedUsersProfile == [] ? (
        <h1>No Appointment</h1>
      ) : (
        appointedUsersProfile.map((appointedUsers) => (
          <div className={styles.listOfUsersCnt}>
            <div className={styles.appointedUserListCnt}>
              <div className={styles.appointedUserProfile}>
                <div className={styles.appointedUserAviCnt}>
                  {appointedUsers.avatar === undefined ? (
                    <img
                      alt="Avi"
                      src={require("../../../assets/profilepic.jpeg")}
                    ></img>
                  ) : (
                    <img
                      className={styles.avi}
                      src={`data:image/jpeg;base64,${appointedUsers.avatar}`}
                      alt="Avatar"
                    />
                  )}
                </div>
                <h3>{appointedUsers.name}</h3>
              </div>
              <div className={styles.userCallBtn}>
                <button value={apptBy} onClick={onClick}>
                  Call
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  appointedUsersProfile: state.psychAppointment.appointedUsersProfile,
});

export default connect(mapStateToProps, {
  getAppointedUsersProfile,
  callUser,
})(ListOfUser);

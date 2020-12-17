import React, { useEffect, useContext, useState } from "react";
import io from "socket.io-client";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AuthContext from "../../context/auth/authContext";
import Filter from "../Filter/Filter";
import styles from "./styles.module.css";
import ringtone from "../../assets/ringtone2.mp3";
import { declineCall } from "../../Redux/VideoCall/video_call_action";
import { loadPsychProfileForUser } from "../../Redux/PsychProfile/psych_profile_aciton";
const socket = io("/videocall");
const IncomingCall = (props) => {
  const authContext = useContext(AuthContext);
  const { loadUser, user } = authContext;
  const [redirect, setRedirect] = useState(false);
  const { caller, declineCall, loadPsychProfileForUser, psychProfile } = props;
  const ring = new Audio(ringtone);
  const { name } = user;
  const [loadedPsychProfile, setPsychProfile] = useState({
    psychName: "",
    psychAvatar: null,
  });
  const { psychName, psychAvatar } = loadedPsychProfile;
  // const {avatar} = psychProfile;
  // const psychName = psychProfile.name
  useEffect(() => {
    loadUser();
  }, []);
  useEffect(() => {
    loadPsychProfileForUser(caller);
  }, [caller]);
  useEffect(() => {
    if (psychProfile !== null || undefined) {
      setPsychProfile({
        psychName: psychProfile.name,
        psychAvatar: Buffer.from(psychProfile.avatar).toString("base64"),
      });
    }
  }, [psychProfile]);
  useEffect(() => {
    ring.play();
  }, []);
  const answerCall = () => {
    setRedirect(true);
    ring.pause();
  };

  const DeclineCall = () => {
    socket.emit("declineCall", caller);
    declineCall();
  };

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: "/vp/videocall",
          state: { id: caller, name: name },
        }}
      />
    );
  }

  return (
    <div>
      <Filter />
      <div className={styles.incomingCallCard}>
        <div className={styles.imgContainer}>
          <img
            className={styles.callerAvi}
            // src={require("../../assets/person4.jpg")}
            src={`data:image/jpeg;base64,${psychAvatar}`}
            alt="Psychiatrist Avatar"
          />
        </div>
        <div style={{ width: "100%" }}>
          {/* <h3>Surafel Incoming Call</h3> */}
          <h3 style={{ color: "#703bda", textAlign: "center" }}>{psychName}</h3>
          <h4 style={{ color: "#7A7A7A", textAlign: "center" }}>
            Incoming Call
          </h4>
        </div>
        <div className={`${styles.incomingCallBtnCnt}`}>
          <div className={styles.btnCnt} onClick={answerCall}>
            <div className={`${styles.incomingCallBtn} ${styles.answerCall}`}>
              <i className="fas fa-phone-alt"></i>
            </div>
            <div style={{ textAlign: "center" }}>Answer Call</div>
          </div>
          <div className={styles.btnCnt} onClick={DeclineCall}>
            <div className={`${styles.incomingCallBtn} ${styles.declineCall}`}>
              <i className="fas fa-phone-slash"></i>
            </div>
            <div style={{ textAlign: "center" }}>Decline Call</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  caller: state.videoCall.caller,
  ringing: state.videoCall.ringing,
  psychProfile: state.psychProfile.psychProfile,
});

export default connect(mapStateToProps, {
  declineCall,
  loadPsychProfileForUser,
})(IncomingCall);

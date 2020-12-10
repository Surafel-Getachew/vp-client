import React, { useEffect, useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AuthContext from "../../context/auth/authContext";
import Filter from "../Filter/Filter";
import styles from "./styles.module.css";
import ringtone from "../../assets/ringtone2.mp3";

const IncomingCall = (props) => {
  const authContext = useContext(AuthContext);
  const { loadUser, user } = authContext;
  const [redirect, setRedirect] = useState(false);
  const { caller } = props;
  const ring = new Audio(ringtone);
  useEffect(() => {
    loadUser();
  }, []);

  // useEffect(() => {
  //   ring.play();
  // }, []);
  const { name } = user;
  const answerCall = () => {
    setRedirect(true);
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
            src={require("../../assets/person4.jpg")}
            alt=""
          />
        </div>
        <div>
          <h3>Surafel Incoming Call</h3>
        </div>
        <div className={`${styles.incomingCallBtnCnt}`}>
          <div className={styles.btnCnt} onClick={answerCall}>
            <div className={`${styles.incomingCallBtn} ${styles.answerCall}`}>
              <i className="fas fa-phone-alt"></i>
            </div>
            <div>Answer Call</div>
          </div>
          <div className={styles.btnCnt}>
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
});

export default connect(mapStateToProps, {})(IncomingCall);

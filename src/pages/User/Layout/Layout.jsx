import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Navbar from "../NavBar/NavBar";
import styles from "./styles.module.css";
import IncomingCall from "../../../component/IncomingCall/IncomingCall";
import ringTone from "../../../assets/ringtone2.mp3";
const Layout = (props) => {
  const [ring, setRing] = useState(false);
  const audio = new Audio(ringTone);
  const { ringing } = props;
  const playAudio = () => {
    audio.play();
  };
  useEffect(() => {
    if (ringing) {
      playAudio();
    }
    setRing(ringing);
  }, [ringing]);
  return (
    <div className={styles.layoutCnt}>
      <div className={styles.sideNav}>
        <Navbar />
      </div>
      <div className={styles.page}>
        {props.children}
        {/* <h1>Center</h1> */}
        </div>
      {ring && <IncomingCall />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  ringing: state.videoCall.ringing,
});

export default connect(mapStateToProps,{
})(Layout);

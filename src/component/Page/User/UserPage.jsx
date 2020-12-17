import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import {} from "../../../Redux/VideoCall/video_call_action";
import styles from "../psychPage.module.css";
import UserNav from "../../User/UserNav/UserNav";
import IncomingCall from "../../IncomingCall/IncomingCall";
import ringTone from "../../../assets/ringtone2.mp3";
const UserPage = (props) => {
  const [ring,setRing] = useState(false);
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
    <div className={styles.psychPage}>
      <div className={styles.psychPageCenter}>
        <UserNav />
        {props.children}
      </div>
      {ring && <IncomingCall />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  ringing: state.videoCall.ringing,
});
export default connect(mapStateToProps)(UserPage);

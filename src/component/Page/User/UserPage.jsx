import React, { useEffect } from "react";
import { connect } from "react-redux";
import {} from "../../../Redux/VideoCall/video_call_action";
import styles from "../psychPage.module.css";
import UserNav from "../../User/UserNav/UserNav";
import IncomingCall from "../../IncomingCall/IncomingCall";
import ringTone from "../../../assets/ringtone2.mp3";
const UserPage = (props) => {
  const audio = new Audio(ringTone);
  const { ringing } = props;
  const playAudio = () => {
    audio.play();
  };
  useEffect(() => {
    if (ringing) {
      playAudio();
      //   // audio.play();
      //   var playPromise = audio.play();
      //   if (playPromise !== undefined) {
      //     playPromise
      //       .then((_) => {
      //         console.log("audio played auto");
      //       })
      //       .catch((error) => {
      //         console.log("playback prevented");
      //       });
      //   }
    }
  }, [ringing]);
  return (
    <div className={styles.psychPage}>
      <div className={styles.psychPageCenter}>
        <UserNav />
        {props.children}
      </div>
      {ringing && <IncomingCall />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  ringing: state.videoCall.ringing,
});
export default connect(mapStateToProps)(UserPage);

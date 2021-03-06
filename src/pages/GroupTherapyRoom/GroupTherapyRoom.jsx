import React, { useEffect, useRef, useState } from "react";
import Peer from "peerjs";
import io from "socket.io-client";
import VideoComponent from "./VideoComponent";
import styles from "./gtr.module.css";
const socket = io("/group");
const peer = new Peer(undefined, {
  path: "/peerjs",
  host: "/",
  port: "5000",
});
const GroupTherapyRoom = (props) => {
  const roomId = props.location.state.id;
  const myStream = useRef();
  const others = useRef();
  const autoScroll = useRef();
  const [audioState, setAudioState] = useState({
    audioIcon: "fas fa-microphone-alt",
    audioText: "Mute",
  });
  const [videoState, setVideoState] = useState({
    videoIcon: "fa fa-video",
    videoText: "Stop Video",
  });
  const { audioIcon, audioText } = audioState;
  const { videoIcon, videoText } = videoState;
  const [myVideo, setMyVideo] = useState();
  const [streams, setStreams] = useState([]);
  const [peeerId, setPeeerId] = useState("");
  const [textMessage, setTxtMessage] = useState("");
  const [recivedTxtMessage, setRecivedTxtMessage] = useState([
    {
      chatText: "",
      chatTime: "",
      sender: "",
    },
  ]);
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        // audio: true,
      })
      .then((stream) => {
        setMyVideo(stream);
        myStream.current.srcObject = stream;
        myStream.current.muted = true;
        peer.on("call", (call) => {
          console.log("someone is calling...");
          call.answer(stream);
          myStream.current.srcObject = stream;
          call.on("stream", (otherPepStream) => {
            console.log("reciving stream..");
            setStreams([...streams, otherPepStream]);
            // others.current.srcObject = otherPepStream;
          });
        });
        socket.on("user-connected", (peerId) => {
          console.log("user to call", peerId);
          var call = peer.call(peerId, stream);
          call.on("stream", (otherPepStream) => {
            // others.current.srcObject = otherPepStream;
            setStreams([...streams, otherPepStream]);
          });
        });
      });
  }, []);
  useEffect(() => {
    socket.emit("join-room", roomId, peer.id);
  }, [peer.id]);

  peer.on("open", (id) => {
    socket.emit("join-room", roomId, id);
  });
  const scrollAuto = () => {
    if (autoScroll.current) {
      autoScroll.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };
  useEffect(() => {
    scrollAuto();
  }, [recivedTxtMessage]);

  // const scorllAuto = () => {
  //   if (autoScroll.current) {
  //     autoScroll.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "end",
  //       inline: "nearest",
  //     });
  //   }
  // };
  const getTime = () => {
    let time = new Date();
    let Hour = time.getHours();
    let Minute = time.getMinutes();
    Minute = Minute < 10 ? "0" + Minute : Minute;
    let AMPM = Hour > 12 ? "PM" : "AM";
    Hour = Hour > 12 ? Hour - 12 : Hour;
    let messageTime = Hour + ":" + Minute + " " + AMPM;
    return messageTime;
  };

  const onChange = (e) => {
    setTxtMessage(e.target.value);
  };

  socket.once("newMessage", (msg) => {
    setRecivedTxtMessage([
      ...recivedTxtMessage,
      { chatText: msg, chatTime: getTime() },
    ]);
    scrollAuto();
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      socket.emit("sendGroupMessage", textMessage, roomId);
      setTxtMessage("");
    }
  };

  const playStopVideo = () => {
    let enabled = myVideo.getVideoTracks()[0].enabled;
    if (enabled) {
      myVideo.getVideoTracks()[0].enabled = false;
      setVideoState({
        ...videoState,
        videoIcon: "fa fa-video-slash",
        videoText: "Play Video",
      });
    } else {
      myVideo.getVideoTracks()[0].enabled = true;
      setVideoState({
        ...videoState,
        videoIcon: "fa fa-video",
        videoText: "Stop Video",
      });
    }
  };

  const muteUnmute = () => {
    let enabled = myVideo.getAudioTracks()[0].enabled;
    if (enabled) {
      myVideo.getAudioTracks()[0].enabled = false;
      setAudioState({
        ...audioState,
        audioIcon: "fas fa-microphone-alt-slash",
        audioText: "Unmute",
      });
    } else {
      myVideo.getAudioTracks()[0].enabled = true;
      setAudioState({
        ...audioState,
        audioIcon: "fas fa-microphone-alt",
        audioText: "Mute",
      });
    }
  };

  return (
    <div className={styles.groupVideoCnt}>
      <div className={styles.videoCnt}>
        <div className={styles.userVideoCnt}>
          <div className={styles.myStreamCnt}>
            <video ref={myStream} autoPlay className={styles.myStreamVideo}></video>
          </div>
          <div className = {styles.othersStreamCnt}>
          {streams.map((stream) => (
            <div className={styles.secondStream}>
              <VideoComponent stream={stream} />
            </div>
          ))}
          </div>
          {/* <video ref={others} autoPlay className={styles.othersStream}></video> */}
        </div>
        <div className={styles.userVideoBtn}>
          <div onClick={muteUnmute}>
            <i className={audioIcon}></i>
            <span>{audioText}</span>
          </div>
          <div onClick={playStopVideo}>
            <i className={videoIcon}></i>
            <span>{videoText}</span>
          </div>
          <div>
            <i style={{ color: "#eb534b" }} className="fa fa-phone-alt"></i>
            <span style={{ color: "#eb534b" }}>End Call</span>
          </div>
        </div>
      </div>
      <div className={styles.chatCnt}>
        <div className={styles.textChatHeader}>
          <div className={styles.textChatHeaderCenter}>
            <h3>Group Chat</h3>
            <h4>Messages</h4>
          </div>
        </div>
        <div className={styles.chatWindow}>
          {recivedTxtMessage.map((msg) => (
            <div className={styles.fromme} key={msg.length}>
              <p className={styles.txtMsg}>{msg.chatText}</p>
              <p className={styles.msgTime}>{msg.chatTime}</p>
            </div>
          ))}
          <div ref={autoScroll} className={styles.autoScroll}></div>
        </div>
        <div className={styles.messageInput}>
          <input
            autoComplete="off"
            type="text"
            placeholder="Type a message..."
            name="message"
            value={textMessage}
            onChange={onChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default GroupTherapyRoom;

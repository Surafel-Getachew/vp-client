import React, { useRef, useEffect, useState } from "react";
import Peer from "peerjs";
import io from "socket.io-client";
import style from "./video.module.css";

const socket = io("/videocall");
const peer = new Peer(undefined, {
  path: "/peerjs",
  host: "/",
  port: "5000",
});
const Video = (props) => {
  const userToCall = props.location.state.id;
  const myName = props.location.state.name;
  const othersStream = useRef();
  const myStream = useRef();
  const chatBox = useRef();
  const [peeerId, setPeeerId] = useState("");
  const [myVideo, setMyVideo] = useState();
  const [recivedTxtMessage, setRecivedTxtMessage] = useState([
    {
      chatText: "",
      chatTime: "",
    },
  ]);
  const [audioState, setAudioState] = useState({
    audioIcon: "fas fa-microphone-alt",
    audioText: "Mute",
  });
  const [videoState, setVideoState] = useState({
    videoIcon: "fa fa-video",
    videoText: "Stop Video",
  });
  const [txtMessage, setTxtMessage] = useState("");
  const [otherPeerName, setOtherPeerName] = useState("");
  const { audioIcon, audioText } = audioState;
  const { videoIcon, videoText } = videoState;
  const { chatText, chatTime } = recivedTxtMessage;
  console.log("checking peer id", peer.id);
  useEffect(() => {
    socket.emit("join-room", userToCall, peer.id, myName);
    console.log("my peer ID", peer.id);
  }, [peer.id]);
  useEffect(() => {
    if (chatBox.current) {
      chatBox.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [recivedTxtMessage]);
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        setMyVideo(stream);
        myStream.current.srcObject = stream;
        myStream.current.muted = true;
        peer.on("call", (call) => {
          call.answer(stream);
          myStream.current.srcObject = stream;
          call.on("stream", (otherPepStream) => {
            othersStream.current.srcObject = otherPepStream;
          });
        });
        socket.on("user-connected", (peerId, peerName) => {
          setOtherPeerName(peerName);
          var call = peer.call(peerId, stream);
          call.on("stream", (otherPepStream) => {
            othersStream.current.srcObject = otherPepStream;
          });
        });
      });
    // eslint-disable-next-line
  }, []);

  socket.on("user-connected", (peerId, peerName) => {
    setOtherPeerName(peerName);
    setPeeerId(peerId);
  });

  useEffect(() => {
    var call = peer.call(peeerId, myVideo);
    if (call !== undefined) {
      call.on("stream", (otherPepStream) => {
        othersStream.current.srcObject = otherPepStream;
      });
    }
  }, [peeerId]);

  // socket.on("user-connected", (peerId, peerName) => {
  //   var call = peer.call(peerId, myVideo);
  //   call.on("stream", (otherPepStream) => {
  //     othersStream.current.srcObject = otherPepStream;
  //   });
  //   setPeeerId(peerId);
  //   setOtherPeerName(peerName);
  // });

  peer.on("open", (id) => {
    socket.emit("join-room", userToCall, id, myName);
    console.log("peer is open");
  });

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

  const onChange = (e) => {
    setTxtMessage(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Enter key pressed");
      socket.emit("sendTxtMessage", txtMessage, userToCall);
      setTxtMessage("");
    }
  };

  // const onSend = () => {
  //   // console.log(txtMessage);
  //   socket.emit("sendTxtMessage", txtMessage, userToCall);
  //   setTxtMessage("");
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
  // console.log(getTime());
  socket.on("newMessage", (msg) => {
    // console.log("New Message", msg);
    setRecivedTxtMessage([
      ...recivedTxtMessage,
      { chatText: msg, chatTime: getTime() },
    ]);
  });
  return (
    <div className={style.videoChatContainer}>
      <div className={style.videochat}>
        <div className={style.top}>
          <div className={style.nav}>
            <h2> My Logo </h2>
            <span>12:12</span>
          </div>
          {/* <div className={style.chat}></div> */}
        </div>
        {/* <Chat /> */}
        <div className={style.streamContainer}>
          <div className={style.myStreamContainer}>
            <video ref={myStream} autoPlay className={style.myvideo}></video>
            <h3>{myName}</h3>
          </div>
          <div className={style.othersStreamContainer}>
            <video
              ref={othersStream}
              autoPlay
              className={style.uservideo}
            ></video>
            <h3>{otherPeerName}</h3>
            {/* <h3>{opn}</h3> */}
          </div>
          <div className={style.bnav}>
            <div onClick={muteUnmute}>
              <i className={audioIcon}></i>
              <span>{audioText}</span>
            </div>
            <div onClick={playStopVideo}>
              <i className={videoIcon}></i>
              <span>{videoText}</span>
            </div>
            <div>
              <i className="fa fa-phone-alt"></i>
              <span>End Call</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.textChat}>
        <h3 style={{ textAlign: "center" }}>Chat</h3>
        {recivedTxtMessage.map((msg) => (
          <div ref={chatBox} className={style.fromme}>
            <p className={style.txtMsg}>{msg.chatText}</p>
            {/* <br /> */}
            <p className={style.msgTime}>{msg.chatTime}</p>
          </div>
        ))}
        <div className={style.messageInput}>
          <input
            autoComplete="off"
            type="text"
            placeholder="Type a message..."
            name="message"
            value={txtMessage}
            onChange={onChange}
            onKeyDown={handleKeyDown}
          />
          {/* <button onClick={onSend}>Send</button> */}
        </div>
      </div>
    </div>
  );
};

export default Video;

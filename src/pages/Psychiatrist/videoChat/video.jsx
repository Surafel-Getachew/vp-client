import React, { useRef, useEffect, useState } from "react";
import Peer from "peerjs";
import io from "socket.io-client";
import style from "./video.module.css";

import Chat from "./chat/Chat";

const Video = (props) => {
  const socket = io();
  const roomId = props.match.params.roomId;
  const peer = new Peer(undefined);
  const videoGrid = useRef();
  const othersStream = useRef();
  const myStream = useRef();
  const [myVideo, setMyVideo] = useState();
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
          call.on("stream", (stream) => {
            othersStream.current.srcObject = stream;
          });
        });
        socket.on("user-connected", (userId) => {
          var call = peer.call(userId, stream);
          call.on("stream", (otherPepStream) => {
            othersStream.current.srcObject = otherPepStream;
          });
        });
      });
  }, []);

  peer.on("open", async (id) => {
    socket.emit("join-room", roomId, id);
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
  return (
    <div className={style.vidiochat}>
      <div className={style.top}>
        <div className={style.nav}>
          <h2> My Logo </h2>
          <span>12:12</span>
        </div>
        <div className={style.chat}></div>
      </div>
      <Chat roomId = {roomId}/>
      <div className={style.vidcon}>
        <video ref={myStream} autoPlay className={style.myvideo}></video>
        <video ref={othersStream} autoPlay className={style.uservideo}></video>
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
  );
};

export default Video;

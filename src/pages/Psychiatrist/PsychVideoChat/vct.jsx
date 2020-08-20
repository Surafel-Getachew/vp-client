import React, { useRef, useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import Peer from "peerjs";
import AuthContext from "../../../context/auth/authContext";
import VideoChatContext from "../../../context/video_chat/videoChatContext";
const Vct = (props) => {
  const authContext = useContext(AuthContext);
  const videoChatContext = useContext(VideoChatContext);
  const { findLoggedInUser, foundLoggedInUser } = authContext;
  const { addParticipant, participants } = videoChatContext;
  const socket = io("http://localhost:5000");
  const roomId = props.match.params.roomId;
  // var peer = new Peer(undefined, {
  //   path: "/peerjs",
  //   host: "/",
  //   port: "5000",
  // });
  var peer = new Peer(undefined);
  const videoGrid = useRef();
  const otherStream = useRef();
  const myStream = useRef();
  const [myVideo, setMyVideo] = useState();
  const [me, setMe] = useState();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        setMyVideo(stream);
        myStream.current.muted = true;
        myStream.current.srcObject = stream;
        peer.on("call", (call) => {
          call.answer(stream);
          myStream.current.srcObject = stream;
          call.on("stream", (stream) => {
            otherStream.current.srcObject = stream;
          });
        });
        socket.on("user-connected", (userId) => {
          var call = peer.call(userId, stream);
          call.on("stream", (otherPStream) => {
            otherStream.current.srcObject = otherPStream;
          });
        });
      });
    // eslint-disable-next-line
  }, []);

  const playStopVideo = () => {
    let enabled = myVideo.getVideoTracks()[0].enabled;
    if (enabled) {
      myVideo.getVideoTracks()[0].enabled = false;
    } else {
      myVideo.getVideoTracks()[0].enabled = true;
    }
  };
  const muteUnmute = () => {
    let enabled = myVideo.getAudioTracks()[0].enabled;
    if (enabled) {
      myVideo.getAudioTracks()[0] = false;
    } else {
      myVideo.getAudioTracks()[0] = true;
    }
  };

  const { name } = foundLoggedInUser;

  useEffect(() => {
    if (foundLoggedInUser !== []) {
      addParticipant(foundLoggedInUser);
    }
  }, [foundLoggedInUser]);

  peer.on("open", async (id) => {
    socket.emit("join-room", roomId, id);
  });

  return (
    <div>
      <h1>vct</h1>
      <div id="videoGrid" ref={videoGrid}>
        <video id="myVideo" ref={myStream} autoPlay></video>
        <video id="otherVideo" ref={otherStream} autoPlay></video>
      </div>
      <div>
        <button onClick={playStopVideo}>StopVideo</button>
        <button onClick={muteUnmute}>Mute?Unmute</button>
      </div>
      <div id="participants">
        {participants.map((participant) => (
          <div>{participant}</div>
        ))}
      </div>
    </div>
  );
};

export default Vct;

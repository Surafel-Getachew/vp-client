
import React, { useState, useEffect, useRef } from "react";
import styles from "./psych-vc.module.css";
import Peer from "peerjs";
import io from "socket.io-client";
const socket = io("http://localhost:5000");

const VideoChatRoom = (props) => {
  const [streams, setStream] = useState();
  const roomId = props.match.params.roomId;
  const video = useRef();
  const otherVideo = useRef();
  const videoGrid = useRef();
  const peer = new Peer(undefined, {
    path: "/peerjs",
    host: "/",
    port: "5000",
  });
  // video.current.mute = true;
  const addVideoStram = (video, stream) => {
    video.current.srcObject = stream;
    // video.current.autoPlay = true;
    video.current.addEventListener("loadedmetadata", () => {
      video.current.play();
    });
    // videoGrid.current.append(video);
  };
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        // audio: true,
      })
      .then((stream) => {
        setStream(stream);
        addVideoStram(video, stream);
        peer.on("call",call => {
          call.answer(stream);
          call.on("stream",userVideoStream => {
            addVideoStram(otherVideo,userVideoStream)
          })
        })
        socket.on("user-connected", (userId) => {
          connectToNewUser(userId);
        });
      });
  }, []);
  peer.on("open", (id) => {
    socket.emit("join-room", roomId,id);
  });
  

  const generateVideoTag = () => {
    return <video></video>
  }
  
  const connectToNewUser = (userId) => {
    const call = peer.call(userId,{streams})
    call.on("stream",userVideoStream => {
      addVideoStram(otherVideo,userVideoStream)
    })
  };
  return (
    <div>
      <div ref={videoGrid} className={styles.vidoeGrid}>
        {/* {generateVideoTag()} */}
        <video ref={video} playsInline></video>
        <video ref={otherVideo} playsInline></video>
      </div>
    </div>
  );
};

export default VideoChatRoom;

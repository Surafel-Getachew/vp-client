import React, { useRef, useEffect } from "react";
import io from "socket.io-client";
import Peer from "peerjs";
const Vct = (props) => {
  const socket = io("http://localhost:5000");
  const roomId = props.match.params.roomId;
  var peer = new Peer(undefined, {
    path: "/peerjs",
    host: "/",
    port: "5000",
  });

  const otherStream = useRef();
  const myStream = useRef();
  // myStream.current.muted = true;
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then((stream) => {
        myStream.current.srcObject = stream;
        peer.on("call", (call) => {
          call.answer(stream);
          myStream.current.srcObject = stream;
          call.on("stream", (stream) => {
            otherStream.current.srcObject = stream;
            // otherStream.current.addEventListener("loadedmetadata", () => {
            //   otherStream.current.play();
            // });
          });
        });
        socket.on("user-connected", (userId) => {
          var call = peer.call(userId, stream);
          call.on("stream", (otherPStream) => {
            otherStream.current.srcObject = otherPStream;
            // otherStream.current.addEventListener("loadedmetadata", () => {
            //   otherStream.current.play();
            // });
          });
         
        });
      });
  }, []);

  peer.on("open", (id) => {
    socket.emit("join-room", roomId, id);
  });

  return (
    <div>
      <h1>vct</h1>
      <div id="videoGrid">
        <video id="myVideo" ref = {myStream} autoPlay></video>
        <video id="otherVideo" ref = {otherStream} autoPlay></video>
      </div>
    </div>
  );
};

export default Vct;

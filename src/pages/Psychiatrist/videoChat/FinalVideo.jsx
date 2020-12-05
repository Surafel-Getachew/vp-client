import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { initializeStream } from "../../../Redux/VideoCall/video_call_action";
import Peer from "socket.io-client";
import io from "socket.io-client";

const FinalVideo = (props) => {
  const { initializeStream, stream } = props;

  const myStream = useRef();
  const otherStream = useRef();

  // useEffect(() => {
  //   initializeStream();
  // }, []);

  useEffect(() => {
    const socket = io()
    navigator.mediaDevices.getUserMedia({
      video:true,
      audio:true
    }).then((stream) => {
      myStream.current.srcObject = stream
    })
    const peer = new Peer({
      initiator:true,
      trickle:false,
      config: {
        iceServers: [
            {
                urls: "stun:numb.viagenie.ca",
                username: "sultan1640@gmail.com",
                credential: "98376683"
            },
            {
                urls: "turn:numb.viagenie.ca",
                username: "sultan1640@gmail.com",
                credential: "98376683"
            }
        ]
    },
    stream:stream
    })
    peer.on("signal",data => {
      socket.emit("callUser",data)
    })
    peer.on("stream",stream => {
      otherStream.current.srcObject = stream
    });
  })

  // useEffect(() => {
  //   myStream.current.srcObject = stream;
  // },[stream])

  return (
    <div>
      <div style={{ border: "2px solid red", width: "400px", height: "400px" }}>
        <video style = {{width:"100%",height:"100%"}}ref={myStream} autoPlay></video>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stream: state.videoCall.stream,
});

export default connect(mapStateToProps, {
  initializeStream,
})(FinalVideo);

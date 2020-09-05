import React, { useRef, useState, useEffect, useContext } from "react";
// import style from "./video.module.css";
import { Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
import style from "./mystyle.module.css";
import Chat from "./chat/Chat";
import io from "socket.io-client";
import Peer from "peerjs";
import AuthContext from "../../../context/auth/authContext";
import VideoChatContext from "../../../context/video_chat/videoChatContext";
const Vct = (props) => {
  const socket = io({
    transports:["websocket"]
  });
  const vct = io("/vct",{
    transports:["websocket"]
  })
  const [msg, setMsg] = useState({
    textMsg: "",
    newMsg: "",
  });
  const { textMsg, newMsg } = msg;
  const authContext = useContext(AuthContext);
  const videoChatContext = useContext(VideoChatContext);
  const { findLoggedInUser, foundLoggedInUser } = authContext;
  const { addParticipant, participants } = videoChatContext;
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
        // audio: true,
      })
      .then((stream) => {
        setMyVideo(stream);
        // myStream.current.muted = true;
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
  const onChange = (e) => {
    setMsg({ ...textMsg, textMsg: e.target.value });
  };

  const onEnter = async (e) => {
    e.preventDefault();
    const messageInfo = {
      room:roomId,
      textMsg:textMsg
    }
    vct.emit ("message",messageInfo);
    setMsg({ textMsg: "" });
  };

  vct.on("newMessage",newMessage => {
    console.log(newMessage);
    setMsg({newMsg:newMessage});
  })

  peer.on("open", async (id) => {
    socket.emit("join-room", roomId, id);
  });

  return (
    <div className={style.videoTextCnt}>
      <div className={style.videoCnt}>
        <div className={style.videoNav}>
          <div className={style.title}>
            <h2>Virtual Psychiatrist </h2>
          </div>
        </div>
        <div className={style.myVideo}>
          {/* <h3>video element</h3> */}
          <video ref={myStream} autoPlay></video>
        </div>
        <div className={style.videoIcons}>
          {/* <h1>icons</h1> */}
          <div className={style.icons}>
            <div className={style.iconCnt}>
              <i className="fa fa-microphone fa-1.8x"></i>
              <span>mute</span>
            </div>
            <div className={style.iconCnt}>
              <i className="fa fa-video fa-1.8x"></i>
              <span>video</span>
            </div>
            <div className={style.iconCnt}>
              <i className="fa fa-clock fa-1.8x"></i>
              <span>time</span>
            </div>
            <div className={style.leaveMeeting}>
              <span>leave meeting</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.textChatCnt}>
        <div className={style.chatTitle}>
          <h3>chat</h3>
        </div>
        <div className={style.chatBuble}>{newMsg}</div>
        <div>
          <Input
            className={style.msgInput}
            placeholder="Write your message..."
            value={textMsg}
            onChange={onChange}
            onPressEnter={onEnter}
            suffix={
              <SendOutlined
                style={{
                  color: "#007ac2",
                  // color: "#fff",
                  fontSize: "20px",
                }}
              />
            }
          ></Input>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className={style.vidiochat}>
  //     <div className={style.uservideo}>
  //       <video ref = {otherStream} className={style.center} autoPlay>
  //         {" "}
  //       </video>
  //     </div>

  //     <div className={style.myvideo}>
  //       <video ref = {myStream} className={style.center} autoPlay>
  //         <source />
  //       </video>
  //     </div>
  //     <div className={style.videonav}>
  //       <div className={style.icon}>
  //         <i className={` fa fa-copy fa-2x`}> </i>
  //       </div>
  //       <div className={style.centericon}>
  //         <div className={style.icon}>
  //           <i className={` fa fa-microphone-alt-slash fa-2x`}> </i>
  //         </div>

  //         <div className={style.iconend}>
  //           <i className={` fa  fa-phone-alt fa-2x`}> </i>
  //           <span>3:00</span>
  //         </div>

  //         <div className={style.icon}>
  //           <i className={` fa fa-video fa-2x`}> </i>
  //         </div>
  //       </div>
  //       <div className={style.icon}>
  //         <i className={` fa fa-comment-alt fa-2x`}> </i>
  //       </div>
  //     </div>
  //     {/* <Chat /> */}
  //   </div>
  // );

  // return (
  //   <div>
  //     <h1>vct</h1>
  //     <div id="videoGrid" ref={videoGrid}>
  //       <video id="myVideo" ref={myStream} autoPlay></video>
  //       <video id="otherVideo" ref={otherStream} autoPlay></video>
  //     </div>
  //     <div>
  //       <button onClick={playStopVideo}>StopVideo</button>
  //       <button onClick={muteUnmute}>Mute?Unmute</button>
  //     </div>
  //     <div id="participants">
  //       {participants.map((participant) => (
  //         <div>{participant}</div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default Vct;

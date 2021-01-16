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

  return (
    <div className={styles.groupVideoCnt}>
      <div className={styles.videoCnt}>
        <video ref={myStream} autoPlay className={styles.myStream}></video>
        {/* <video ref={others} autoPlay className={styles.othersStream}></video> */}
        {streams.map((stream) => (
          <VideoComponent stream={stream} />
        ))}
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

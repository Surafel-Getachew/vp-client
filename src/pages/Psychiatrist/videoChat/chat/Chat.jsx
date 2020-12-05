import React, { useState, useRef } from "react";
import style from "../video.module.css";
import Buble from "./Buble";
const Chat = ({ roomId }) => {
  const [message, setMessage] = useState("");
  const chatCont = useRef();
  const recivedMsg = [];
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const onClick = () => {
    setMessage({ message });
    const messageInfo = {
      room: roomId,
      textMsg: message,
    };
    // socket.emit("message", messageInfo);
    // setMessage("");
  };
  // socket.on("newMessage", (message) => {
  //   console.log(message)
  //   recivedMsg.push(message);
  //   console.log(recivedMsg);
  // });
  return (
    <div className={style.chat}>
      <div className={style.chatheader}>
        <i className={` fa fa-arrow-left `}> </i>
        <p>Chat</p>
        <i className={` fa fa-ellipsis-v `}> </i>
      </div>

      <div ref={chatCont} className={style.chatcon}>
        {recivedMsg.map((msg) => (
          <Buble messages={msg} />
        ))}
      </div>

      <input
        placeholder="Write Your Message..."
        className={style.smsinput}
        type="text"
        value={message}
        onChange={onChange}
      />
      {/* <input type="submit" value="send" onClick={onClick} /> */}
    </div>
  );
};

export default Chat;

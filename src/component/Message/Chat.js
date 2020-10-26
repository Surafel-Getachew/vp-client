import React, { useContext, useState } from "react";
import ChatBox from "./ChatBox";
import GroupChatContext from "../../context/groupChat/groupChatContext";

const Chat = () => {
  const [message, setMessage] = useState("");
  const groupChatContext = useContext(GroupChatContext);
  const { setCurrentMessage, currentRoom } = groupChatContext;

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const messageInfo = {
    text: message,
    room: currentRoom,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setCurrentMessage(messageInfo);
  };

  return (
    <div>
      <div>
        <ChatBox />
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          name="message"
          value={message}
          placeholder="message..."
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Chat;

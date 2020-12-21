import React, { useEffect, useState, useContext, useRef } from "react";
import { connect } from "react-redux";
import AuthContext from "../../../context/auth/authContext";
import { loadPsychBasicProfile } from "../../../Redux/PsychProfile/psych_profile_aciton";
import styles from "./chatWindow.module.css";
import {
  sendTextMessage,
  reciveTextMessage,
} from "../../../Redux/VideoCall/video_call_action";
import { getMessages } from "../../../Redux/Messages/message_action";
const ChatWindow = (props) => {
  const {
    activeUser,
    loadPsychBasicProfile,
    psychBasicProfile,
    sendTextMessage,
    reciveTextMessage,
    getMessages,
    messageTexts,
  } = props;
  const autoScroll = useRef();
  const authContext = useContext(AuthContext);
  const { loadPsychiatrist, user } = authContext;
  const { _id } = user;
  const [selectedUser, setSelectedUser] = useState({
    selectedUserName: "",
    selectedUserAvatar: null,
  });
  const [message, setMessage] = useState("");
  const [recivedTxtMessage,setRecivedTxtMessage] = useState("");
  const { selectedUserName, selectedUserAvatar } = selectedUser;
  useEffect(() => {
    loadPsychiatrist();
  }, []);

  useEffect(() => {
    loadPsychBasicProfile(activeUser);
  }, [activeUser]);
  useEffect(() => {
    if (psychBasicProfile !== null) {
      setSelectedUser({
        selectedUserName: psychBasicProfile.name,
        selectedUserAvatar: psychBasicProfile.avatar,
      });
    }
  }, [psychBasicProfile]);
  useEffect(() => {
    getMessages(_id, activeUser);
  }, [activeUser]);
  const onChange = (e) => {
    setMessage(e.target.value);
  };
  const onSend = (e) => {
    sendTextMessage(_id, activeUser, message);
    setMessage("");
  };
  useEffect(() => {
    scorllAuto();
  }, [messageTexts]);

  const scorllAuto = () => {
    if (autoScroll.current) {
      autoScroll.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatTopNav}>
        <div className={styles.selectedUser}>
          {selectedUserAvatar === undefined ? (
            <img
              src={require("../../../assets/profilepic.jpeg")}
              alt="Avatar"
            />
          ) : (
            <img
              src={`data:image/jpeg;base64,${selectedUserAvatar}`}
              alt="Avatar"
            />
          )}
          {selectedUserName === "" ? (
            <h3>Loading...</h3>
          ) : (
            <h3>{selectedUserName}</h3>
          )}
        </div>
      </div>
      <div className={styles.msgDisplayCnt}>
        {messageTexts.map((msg) =>
          msg.sender === _id ? (
            <div key={msg._id} className={styles.myMessage}>
              {msg.textMessage}
            </div>
          ) : (
            <div key={msg._id} className={styles.othersMessage}>
              <div className={styles.msgAvi}>
                {selectedUserAvatar === undefined ? (
                  <img
                    src={require("../../../assets/profilepic.jpeg")}
                    alt="Avatar"
                  />
                ) : (
                  <img
                    src={`data:image/jpeg;base64,${selectedUserAvatar}`}
                    alt="Avatar"
                  />
                )}
                {/* <img src={require("../../../assets/profilepic.jpeg")} alt=""/> */}
              </div>
              <div className={styles.otherMsgText}>{msg.textMessage}</div>
            </div>
          )
        )}
      </div>
      <div ref={autoScroll} className={styles.autoScroll}></div>
      <div className={styles.msgInputCnt}>
        <input
          type="text"
          className={styles.msgInput}
          placeholder="Type a message here..."
          onChange={onChange}
          value={message}
        />
        <button className={styles.msgSendBtn} onClick={onSend}>
          <i className="fa fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

const mapStateToPros = (state) => ({
  psychBasicProfile: state.psychProfile.psychBasicProfile,
  messageTexts: state.message.messageTexts,
});

export default connect(mapStateToPros, {
  loadPsychBasicProfile,
  sendTextMessage,
  getMessages,
})(ChatWindow);

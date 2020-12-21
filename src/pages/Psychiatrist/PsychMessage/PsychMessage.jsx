import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import Layout from "../../../component/Layout/Layout";
import styles from "./styles.module.css";
import AuthContext from "../../../context/auth/authContext";
import {
  sendTextMessage,
  reciveTextMessage,
} from "../../../Redux/VideoCall/video_call_action";
import { getMessages } from "../../../Redux/Messages/message_action";
import {
  loadAllPsychsBasicProfile,
} from "../../../Redux/PsychProfile/psych_profile_aciton";
import UserNameAvi from "./UserNameAvi";
import ChatWindow from "./ChatWindow"
const PsychMessage = (props) => {
  const authContext = useContext(AuthContext);
  const { loadPsychiatrist, user } = authContext;
  const [reciver, setReciver] = useState("");
  const [message, setMessage] = useState("");
  const [recivedMessage, setRecivedMessage] = useState("");
  const {
    sendTextMessage,
    reciveTextMessage,
    getMessages,
    loadAllPsychsBasicProfile,
    psychsBasicProfile,
  } = props;
  const { _id } = user;
  // const { psychOwner, name, avatar } = psychProfiles;
  useEffect(() => {
    loadPsychiatrist();
  }, []);
  useEffect(() => {
    setReciver(_id)
  },[user])
  useEffect(() => {
    loadAllPsychsBasicProfile();
    // loadAllPsych();
  }, []);

  useEffect(() => {
    reciveTextMessage();
  }, []);
  // reciveTextMessage();
  useEffect(() => {
    getMessages(_id, reciver);
  }, [reciver]);

  const onChange = (e) => {
    setMessage(e.target.value);
    // setMessage({ ...message,[message]:e.target.value });
  };

  const onSend = () => {
    sendTextMessage(_id, reciver, message);
    // socket.emit("sendMessage", reciver, message);
  };

  return (
    <Layout>
      <div className={styles.msgContainer}>
        <div className={styles.users}>
          {psychsBasicProfile.map((psych) => (
            <div key={psych.psychOwner} onClick = {() => setReciver(psych.psychOwner)}>
              <UserNameAvi name={psych.name} avatar = {psych.avatar}/>
            </div>
          ))}
        </div>
        <div className={styles.chats}>
          <ChatWindow
            activeUser = {reciver}
          />
          {/* <input
            type="text"
            placeholder="message"
            value={message}
            onChange={onChange}
          ></input>
          <button type="submit" onClick={onSend}>
            Send
          </button>
          {recivedMessage} */}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  recivedTxtMessage: state.videoCall.recivedTxtMessage,
  loadedMessages: state.message.messageTexts,
  psychsBasicProfile: state.psychProfile.psychsBasicProfile,
});

export default connect(mapStateToProps, {
  sendTextMessage,
  reciveTextMessage,
  getMessages,
  loadAllPsychsBasicProfile,
})(PsychMessage);

import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import Layout from "../../../component/Layout/Layout";
import styles from "./styles.module.css";
import PsychContext from "../../../context/psych/psychContext";
import AuthContext from "../../../context/auth/authContext";
import {
  sendTextMessage,
  reciveTextMessage,
} from "../../../Redux/VideoCall/video_call_action";
import {getMessages} from "../../../Redux/Messages/message_action"

const PsychMessage = (props) => {
  const psychContext = useContext(PsychContext);
  const authContext = useContext(AuthContext);
  const { loadAllPsych, psychs } = psychContext;
  const { loadPsychiatrist, user } = authContext;
  const [reciver, setReciver] = useState();
  const [message, setMessage] = useState("");
  const [recivedMessage, setRecivedMessage] = useState("");
  const {
    sendTextMessage,
    reciveTextMessage,
    getMessages,
  } = props;
  const { _id } = user;
  useEffect(() => {
    loadAllPsych();
  }, []);

  useEffect(() => {
    loadPsychiatrist();
  }, []);

  useEffect(() => {
    reciveTextMessage();
  }, []);

  useEffect(() => {
    getMessages(_id,reciver)
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
      <h1>Messages</h1>
      <div className={styles.msgContainer}>
        <div className={styles.users}>
          {psychs.map((psych) => (
            <div key={psych._id} className={styles.nameContainer}>
              <div
                onClick={() => {
                  setReciver(psych._id);
                }}
              >
                <h4>{psych.name}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.chats}>
          <input
            type="text"
            placeholder="message"
            value={message}
            onChange={onChange}
          ></input>
          <button type="submit" onClick={onSend}>
            Send
          </button>
          {recivedMessage}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  recivedTxtMessage: state.videoCall.recivedTxtMessage,
  loadedMessages:state.message.messageTexts
});

export default connect(mapStateToProps, {
  sendTextMessage,
  reciveTextMessage,
  getMessages
})(PsychMessage);

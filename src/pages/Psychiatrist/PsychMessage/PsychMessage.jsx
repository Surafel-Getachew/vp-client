import React, { useContext, useEffect, useState } from "react";
import {connect} from "react-redux"
import io from "socket.io-client";
import Layout from "../../../component/Layout/Layout";
import styles from "./styles.module.css";
import PsychContext from "../../../context/psych/psychContext";
import {sendTextMessage,reciveTextMessage} from "../../../Redux/VideoCall/video_call_action"
// const socket = io();

const PsychMessage = (props) => {
  const psychContext = useContext(PsychContext);
  const { loadAllPsych, psychs } = psychContext;
  const [reciver, setReciver] = useState();
  const [message, setMessage] = useState("");
  const [recivedMessage,setRecivedMessage] = useState("");
  const {sendTextMessage,reciveTextMessage} = props
  useEffect(() => {
    loadAllPsych();
  }, []);

  useEffect(() => {
    reciveTextMessage();
  }, [])

  const onChange = (e) => {
    setMessage(e.target.value);
    // setMessage({ ...message,[message]:e.target.value });
  };

  const onSend = () => {
    sendTextMessage(reciver,message)
    // socket.emit("sendMessage", reciver, message);
  };

  // socket.on("msg", (mssg) => {
  //   console.log(mssg);
  //   // setRecivedMessage(message)
  // });

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

const mapStateToProps = (state) => (
  {
    recivedTxtMessage:state.videoCall.recivedTxtMessage
  }
)

export default connect(mapStateToProps,{
  sendTextMessage,
  reciveTextMessage
})(PsychMessage);

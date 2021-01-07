import React, { useState, useEffect,useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getPsychAppointment } from "../../../Redux/PsychAppointment/psych_appointment_action";
import { callUser } from "../../../Redux/VideoCall/video_call_action";
import AuthContext from "../../../context/auth/authContext"
import Tabs from "antd"
import Layout from "../../../component/Layout/Layout";
import uuid from "uuid";
import styles from "./psych-vc.module.css";
const {TabPane} = Tabs;
// import PsychPage from "../../../component/Page/PsychPage";
const PsychVideoChat = (props) => {
  const authContext = useContext(AuthContext);
  const {loadPsychiatrist,user} = authContext;
  const { getPsychAppointment, psychAppointment, callUser } = props;
  const [appointment, setAppointment] = useState([]);
  const [redirect, setRedirect] = useState({
    redirectTo: "",
    redirectValue: false,
  });
  const { redirectTo, redirectValue } = redirect;
  useEffect (() => {
    loadPsychiatrist();
    // eslint-disable-next-line
  },[]);
  const {_id,name} = user;
  useEffect(() => {
    if (!psychAppointment) {
      getPsychAppointment();
    } else {
      setAppointment(psychAppointment);
    }
  }, [psychAppointment]);

  const { v4: uuidv4 } = uuid;
  const [links, setLink] = useState("");
  let roomId;
  const onClick = async () => {
    roomId = uuidv4();
    setLink(`/vp/videochat/room/${roomId}`);
  };
  const onCall = (e) => {
    callUser(e.target.value,_id);
    setRedirect({
      ...redirect,
      redirectTo: e.target.value,
      redirectValue: true,
    });
  };

  if (redirectValue) {
    return (
      <Redirect
        to={{
          pathname: "/vp/videocall",
          state: { id:_id,name:name},
          // state: { id: redirectTo },
        }}
      />
    );
  }

  return (
    <Layout>
      <div className={styles.psychVcCnt}>
        <div>
          {appointment.monday !== undefined ? (
            <div>
              {appointment.monday.map((appt) => (
                <div key = {appt._id}>
                  <h6>{appt.appointedBy}</h6>
                  <button value={appt.appointedBy} onClick={onCall}>
                    Call
                  </button>
                </div>
              ))}
            </div>
          ) : (
            "Loading..."
          )}
        </div>
        <div>
          <p>Create a Meeting...</p>
        </div>
        <div onClick={onClick} className={styles.createLink}>
          <i className="fas fa-video"></i>
          {/* <button>create</button>y */}
        </div>
        {links === "" ? (
          ""
        ) : (
          <div>
            Generated Room Link:{" "}
            <Link target="_blank" to={links}>
              {links}
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  psychAppointment: state.psychAppointment.psychAppointment,
});

export default connect(mapStateToProps, {
  getPsychAppointment,
  callUser,
})(PsychVideoChat);

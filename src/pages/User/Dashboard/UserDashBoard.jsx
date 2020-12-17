import React, { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import UserPage from "../../../component/Page/User/UserPage";
import Layout from "../Layout/Layout";
import { reciveCall } from "../../../Redux/VideoCall/video_call_action";
import AuthContext from "../../../context/auth/authContext";
const UserDashBoard = (props) => {
  const authContext = useContext(AuthContext);
  const { loadUser, user } = authContext;
  const { reciveCall, ringing, caller } = props;
  const [recivingCall, setRecivingCall] = useState(false);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    loadUser();
  }, []);
  const { name } = user;
  useEffect(() => {
    if (ringing) {
      setRecivingCall(true);
    }
  }, [ringing]);
  reciveCall();
  // const answerCall = () => {
  //   setRedirect(true);
  // };
  // if (redirect) {
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: "/vp/videocall",
  //         state: { id: caller, name: name },
  //       }}
  //     />
  //   );
  // }
  return (
    // <Layout>
    <UserPage>
      <div>
        <h2>User Dashboard</h2>
        {/* {recivingCall ? (
          <div>
            <h1>SomeOne is calling</h1>
            <button onClick={answerCall}>Answer</button>
            <button>Decline</button>
          </div>
        ) : null} */}
      </div>
      </UserPage>
    // </Layout>
  );
};

const mapStateToProps = (state) => ({
  ringing: state.videoCall.ringing,
  caller: state.videoCall.caller,
});

export default connect(mapStateToProps, {
  reciveCall,
})(UserDashBoard);

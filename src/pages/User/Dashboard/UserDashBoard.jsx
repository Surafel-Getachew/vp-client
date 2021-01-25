import React, { useEffect, useState, useContext } from "react";
import { Tabs } from "antd";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "../Layout/Layout";
import UserApptHeader from "./UserApptHeader";
import { reciveCall } from "../../../Redux/VideoCall/video_call_action";
import { loadTodaysAppt } from "../../../Redux/UserAppointment/user_appt_action";
import AuthContext from "../../../context/auth/authContext";
import styles from "./userDashboard.module.css";
import UserAppt from "./UserAppt";
const { TabPane } = Tabs;
const UserDashBoard = (props) => {
  const authContext = useContext(AuthContext);
  const { loadUser, user } = authContext;
  const { reciveCall, ringing, caller, loadTodaysAppt, todaysAppt } = props;
  const [recivingCall, setRecivingCall] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [currentTab, setCurrentTab] = useState("monday");
  const onDayChange = (key) => {
    setCurrentTab(key);
  };
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

  useEffect(() => {
    loadTodaysAppt(currentTab);
  }, [currentTab]);

  return (
    <Layout>
      <div className={styles.UserDashBoard}>
        <Tabs
          defaultActiveKey="monday"
          centered
          tabBarGutter="1"
          tabPosition="top"
          onChange={onDayChange}
        >
          <TabPane tab="Monday" key="monday">
            <UserApptHeader currentTab = {currentTab} todaysAppt={todaysAppt} />
          </TabPane>
          <TabPane tab="Tuesday" key="tuesday">
            <UserApptHeader currentTab = {currentTab} todaysAppt={todaysAppt} />
          </TabPane>
          <TabPane tab="Wednesday" key="wednesday">
            <UserApptHeader currentTab = {currentTab} todaysAppt={todaysAppt} />
          </TabPane>
          <TabPane tab="Thursday" key="thursday">
            <UserApptHeader currentTab = {currentTab} todaysAppt={todaysAppt} />
          </TabPane>
          <TabPane tab="Friday" key="friday">
            <UserApptHeader currentTab = {currentTab} todaysAppt={todaysAppt} />
          </TabPane>
          <TabPane tab="Saturday" key="saturday">
            <UserApptHeader currentTab = {currentTab} todaysAppt={todaysAppt} />
          </TabPane>
          <TabPane tab="Sunday" key="sunday">
            <UserApptHeader currentTab = {currentTab} todaysAppt={todaysAppt} />
          </TabPane>
        </Tabs>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  ringing: state.videoCall.ringing,
  caller: state.videoCall.caller,
  todaysAppt: state.userAppt.todaysAppt,
});

export default connect(mapStateToProps, {
  reciveCall,
  loadTodaysAppt,
})(UserDashBoard);

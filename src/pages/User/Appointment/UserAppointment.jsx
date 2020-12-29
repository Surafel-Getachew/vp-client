import React, { useState } from "react";
import { Tabs } from "antd";
import PsychScheduleDisplay from "../../../component/User/UserApptForm/PsychScheduleDisplay";
import UserPage from "../../../component/User/UserApptForm/PsychScheduleDisplay";
import UserApptForm from "../../../component/User/UserApptForm/UserApptForm";
import Layout from "../Layout/Layout";
import styles from "./userAppt.module.css";
const { TabPane } = Tabs;

const UserAppointment = (props) => {
  const [currentTab, setCurrentTab] = useState("monday");
  const callback = (key) => {
    setCurrentTab(key);
  };
  let psychId = props.location.state.id;
  return (
    <Layout>
      <div className={styles.userApptCnt}>
        <Tabs
          defaultActiveKey="monday"
          centered
          tabBarGutter="1"
          tabPosition="top"
          onChange={callback}
          className = {styles.scheduleTabs}
        >
          <TabPane tab="Monday" key="monday">
            <UserApptForm theDate={currentTab} psychId={psychId} />
          </TabPane>
          <TabPane tab="Tuesday" key="tuesday">
            <UserApptForm theDate={currentTab} psychId={psychId} />
          </TabPane>
          <TabPane tab="Wednesday" key="wednesday">
            <UserApptForm theDate={currentTab} psychId={psychId} />
          </TabPane>
          <TabPane tab="Thursday" key="thursday">
            <UserApptForm theDate={currentTab} psychId={psychId} />
          </TabPane>
          <TabPane tab="Friday" key="friday">
            <UserApptForm theDate={currentTab} psychId={psychId} />
          </TabPane>
          <TabPane tab="Saturday" key="saturday">
            <UserApptForm theDate={currentTab} psychId={psychId} />
          </TabPane>
          <TabPane tab="Sunday" key="sunday">
            <UserApptForm theDate={currentTab} psychId={psychId} />
          </TabPane>
        </Tabs>
        {/* <div className={styles.psychPsychedule}>
          <PsychScheduleDisplay date={currentTab} psychId={psychId} />
        </div> */}
      </div>
    </Layout>
  );
};

export default UserAppointment;

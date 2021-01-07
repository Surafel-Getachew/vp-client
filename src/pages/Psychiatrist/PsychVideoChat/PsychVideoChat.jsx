import React, { useState } from "react";
import { Tabs } from "antd";
import Layout from "../../../component/Layout/Layout";
import VideoChatList from "./VideoChatList";
import styles from "./check.module.css";
const { TabPane } = Tabs;
const PsychVideoChat = () => {
  const [currentTab, setCurrentTab] = useState("monday");
  const onDayChange = (key) => {
    setCurrentTab(key);
  };
  return (
    <Layout>
      <div className={styles.vcCont}>
        <Tabs
          defaultActiveKey="monday"
          centered
          tabBarGutter="1"
          tabPosition="top"
          onChange={onDayChange}
        >
          <TabPane tab="Monday" key="monday">
            {/* Todays Schedule */}
            <VideoChatList date={currentTab} />
          </TabPane>
          <TabPane tab="Tuesday" key="tuesday">
            <VideoChatList date={currentTab} />
          </TabPane>
          <TabPane tab="Wednesday" key="wednesday">
            <VideoChatList date={currentTab} />
          </TabPane>
          <TabPane tab="Thursday" key="thursday">
            <VideoChatList date={currentTab} />
          </TabPane>
          <TabPane tab="Friday" key="friday">
            <VideoChatList date={currentTab} />
          </TabPane>
          <TabPane tab="Saturday" key="saturday">
            <VideoChatList date={currentTab} />
          </TabPane>
          <TabPane tab="Sunday" key="sunday">
            <VideoChatList date={currentTab} />
          </TabPane>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PsychVideoChat;

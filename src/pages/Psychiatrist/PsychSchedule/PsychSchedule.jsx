import React, { useState } from "react";
import PsychPage from "../../../component/Page/PsychPage";
import Layout from "../../../component/Layout/Layout";
import ScheduleList from "../../../component/psychiatrist/PsychiatrisSchedule/ScheduleList";
import { Tabs } from "antd";
import styles from "./schedule.module.css";
const { TabPane } = Tabs;

const PsychSchedule = () => {
  const [currentTab, setCurrentTab] = useState("monday");
  const callback = (key) => {
    setCurrentTab(key);
  };

  return (
    <Layout>
      <div className={styles.scheduleContainer}>
        <Tabs
          defaultActiveKey="monday"
          centered
          tabBarGutter="1"
          tabPosition="top"
          onChange={callback}
        >
          <TabPane tab="Monday" key="monday">
            <ScheduleList theDate={currentTab} />
          </TabPane>
          <TabPane tab="Tuesday" key="tuesday">
            <ScheduleList theDate={currentTab} />
          </TabPane>
          <TabPane tab="Wednesday" key="wednesday">
            <ScheduleList theDate={currentTab} />
          </TabPane>
          <TabPane tab="Thursday" key="thursday">
            <ScheduleList theDate={currentTab} />
          </TabPane>
          <TabPane tab="Friday" key="friday">
            <ScheduleList theDate={currentTab} />
          </TabPane>
          <TabPane tab="Saturday" key="saturday">
            <ScheduleList theDate={currentTab} />
          </TabPane>
          <TabPane tab="Sunday" key="sunday">
            <ScheduleList theDate={currentTab} />
          </TabPane>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PsychSchedule;

import React from "react";
import PsychPage from "../../../component/Page/PsychPage";
import ScheduleList from "../../../component/psychiatrist/PsychiatrisSchedule/ScheduleList";
import { Tabs } from "antd";
import styles from "./schedule.module.css";
const { TabPane } = Tabs;

const PsychSchedule = () => {
  return (
    <PsychPage>
      <div className={styles.scheduleContainer}>
        <Tabs defaultActiveKey="1" centered tabBarGutter="1" tabPosition="top">
          <TabPane tab="Monday" key="1">
            <ScheduleList theDate="monday" />
          </TabPane>
          <TabPane tab="Tuesday" key="2">
            <ScheduleList theDate="tuesday" />
          </TabPane>
          <TabPane tab="Wednesday" key="4">
            <ScheduleList theDate="wednesday" />
          </TabPane>
          <TabPane tab="Thursday" key="5">
            <ScheduleList theDate="thursday" />
          </TabPane>
          <TabPane tab="Friday" key="6">
            <ScheduleList theDate="friday" />
          </TabPane>
          <TabPane tab="Saturday" key="7">
            <ScheduleList theDate="saturday" />
          </TabPane>
          <TabPane tab="Sunday" key="8">
            <ScheduleList theDate="sunday" />
          </TabPane>
        </Tabs>
      </div>
    </PsychPage>
  );
};

export default PsychSchedule;

import React, { useState } from "react";
import { Tabs } from "antd";
import UserPage from "../../../component/Page/User/UserPage";
import UserApptForm from "../../../component/User/UserApptForm/UserApptForm";
import Layout from "../Layout/Layout";
const { TabPane } = Tabs;

const UserAppointment = (props) => {
  const [currentTab, setCurrentTab] = useState("monday");
  const callback = (key) => {
    setCurrentTab(key);
  };
  let psychId = props.location.state.id;
  return (
    <Layout>
      <div>
        <Tabs
          defaultActiveKey="monday"
          centered
          tabBarGutter="1"
          tabPosition="top"
          onChange={callback}
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
      </div>
    </Layout>
  );
};

export default UserAppointment;

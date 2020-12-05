import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadPsychProfileForUser } from "../../../Redux/PsychProfile/psych_profile_aciton";
import { Tabs } from "antd";
import styles from "./detailProfile.module.css";
import Overview from "../../../component/PsychDetailProfile/Overview";
import EducationExperience from "../../../component/PsychDetailProfile/EducationExperience";
import ServicesSpecialites from "../../../component/PsychDetailProfile/ServicesSpecialites";
import About from "../../../component/PsychDetailProfile/About";
const { TabPane } = Tabs;

const PsychDetailProfile = (props) => {
  const [profile, setProfile] = useState({});
  const { psychProfile, loadPsychProfileForUser } = props;
  // console.log(props.location.state.id);
  useEffect(() => {
    if (!psychProfile) loadPsychProfileForUser(props.location.state.id);
    if (psychProfile) {
      setProfile(psychProfile);
    }
    // eslint-disable-next-line
  }, [psychProfile]);
  const { name, specializations, about, education } = profile;
  return (
    <div className={styles.profileCont}>
      <Overview profile={profile} />
      <Tabs defaultActiveKey="1" centered tabBarGutter="1" tabPosition="top">
        <TabPane tab="Education and Experience" key="1">
          <EducationExperience profile={profile} />
        </TabPane>
        <TabPane tab="Service and Specialites" key="2">
          <ServicesSpecialites profile={profile} />
        </TabPane>
        <TabPane tab="Location" key="3">
          <h1>This is Tab3</h1>
        </TabPane>
        <TabPane tab="About" key="4">
          <About profile={about} />
        </TabPane>
      </Tabs>
    </div>
  );
};
const mapStateToProps = (state) => ({
  psychProfile: state.psychProfile.psychProfile,
});
export default connect(mapStateToProps, { loadPsychProfileForUser })(
  PsychDetailProfile
);

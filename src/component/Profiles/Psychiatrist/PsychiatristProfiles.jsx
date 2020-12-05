import React, { useEffect } from "react";
import PsychiatristProfileItems from "./PsychProfileItems";
import { connect } from "react-redux";
import styles from "./psychProfiles.module.css"
import { loadAllPsychProfile } from "../../../Redux/PsychProfile/psych_profile_aciton";

const PsychiatristProfiles = (props) => {

  const { loadAllPsychProfile, psychProfiles } = props;
  useEffect(() => {
    loadAllPsychProfile();
    // eslint-disable-next-line
  }, []);
  return (
    <div className = {styles.mainCnt}>
      {psychProfiles.map((profile) => (
        <PsychiatristProfileItems key = {profile._id} profile={profile} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  psychProfiles: state.psychProfile.psychProfiles,
});
export default connect(mapStateToProps, { loadAllPsychProfile })(
  PsychiatristProfiles
);

import React, { useEffect } from "react";
import PsychiatristProfileItems from "./PsychProfileItems";
import { connect } from "react-redux";
import styles from "./psychProfiles.module.css";
import {
  loadAllPsychProfile,
  loadAllPsychsBasicProfile,
} from "../../../Redux/PsychProfile/psych_profile_aciton";

const PsychiatristProfiles = (props) => {
  const { loadAllPsychsBasicProfile, psychsBasicProfile } = props;
  useEffect(() => {
    loadAllPsychsBasicProfile();
    // eslint-disable-next-line
  }, []);
  return (
    <div className={styles.mainCnt}>
      {/* <h1>Profiles</h1> */}
      {psychsBasicProfile.map((profile) => (
        <PsychiatristProfileItems key={profile._id} profile={profile} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  psychProfiles: state.psychProfile.psychProfiles,
  psychsBasicProfile: state.psychProfile.psychsBasicProfile,
});
// export default connect(mapStateToProps, { loadAllPsychProfile })(
//   PsychiatristProfiles,
//   loadAllPsychsBasicProfile
// );

export default connect(mapStateToProps, {
  loadAllPsychsBasicProfile,
})(PsychiatristProfiles);

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPsychScheduleById } from "../../../Redux/Schedule/schedule_action";
import { loadPsychBasicProfile } from "../../../Redux/PsychProfile/psych_profile_aciton";
import { Timeline } from "antd";
import { getTimeAMPMFormat } from "../../../utils/helpers";
import { ClockCircleOutlined } from "@ant-design/icons";
import styles from "./scheduleDisplay.module.css";
const PsychScheduleDisplay = (props) => {
  const {
    getPsychScheduleById,
    psychScheduleById,
    psychId,
    date,
    psychBasicProfile,
    loadPsychBasicProfile,
  } = props;
  const [profile, setProfile] = useState({
    name: "",
    avatar: null,
  });
  const { name, avatar } = profile;
  useEffect(() => {
    getPsychScheduleById(psychId, date);
  }, [date, psychId]);

  useEffect(() => {
    loadPsychBasicProfile(psychId);
  }, [psychId]);
  useEffect(() => {
    if (psychBasicProfile !== null) {
      setProfile({
        name: psychBasicProfile.name,
        avatar: psychBasicProfile.avatar,
      });
    }
  }, [psychBasicProfile]);
  return (
    <div>
      <div className={styles.psychAviCnt}>
        <div className={styles.psychAvi}>
          {avatar === null ? (
            <img alt="Avi" src={require("../../../assets/profilepic.jpeg")} />
          ) : (
            <img src={`data:image/jpeg;base64,${avatar}`} alt="Avatar" />
          )}
        </div>
        <h3>{name}</h3>
      </div>
      <div className={styles.psychSchedule}>
        {psychScheduleById.length === 0 < 0 ? (
          <div style={{ textAlign: "center" }}>
            <ClockCircleOutlined style={{ fontSize: "100px", color: "#eee" }} />
            <h5
              style={{
                // textAlign: "center",
                marginTop: "20px",
                // color: "rgb(35, 129, 218)",
              }}
            >
              No Schedule Today
            </h5>
          </div>
        ) : (
          <Timeline>
            {psychScheduleById.map((schedule) => (
              <Timeline.Item>
                <span>Start Time </span>
                <span> </span>
                {getTimeAMPMFormat(new Date(schedule.start))}
                <span> </span>-<span> </span>
                <span>End Time </span>
                {getTimeAMPMFormat(new Date(schedule.end))}
              </Timeline.Item>
            ))}
          </Timeline>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  psychScheduleById: state.schedule.psychScheduleById,
  psychBasicProfile: state.psychProfile.psychBasicProfile,
});

export default connect(mapStateToProps, {
  getPsychScheduleById,
  loadPsychBasicProfile,
})(PsychScheduleDisplay);

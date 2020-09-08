import React, { useState, useEffect } from "react";
import { Timeline,Spin } from "antd";
import style from "./edu.module.css";
const EducationExperience = ({ profile }) => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setEducation(profile.education);
    if (profile.education !== undefined) {
      setLoading(false);
    }
  }, [profile]);
  // console.log(profile)
  return (
    <div className={style.eduExpCont}>
      <div className={style.edu}>
        <h4>Education</h4>

        {loading === false ? (
          <Timeline mode="right">
            {education.map((edu) => (
              <Timeline.Item key={edu._id} label={edu.Inistitute}>
                {edu.educationStatus}
              </Timeline.Item>
            ))}
          </Timeline>
        ) : (
          <Spin/>
        )}
      </div>
      <div className={style.exp}>
        <h4>Experience</h4>
        <Timeline mode="right">
          <Timeline.Item label="2015-09-01 ">
            Create a services site
          </Timeline.Item>
          <Timeline.Item label="2015-09-01">
            Solve initial network problems
          </Timeline.Item>
          <Timeline.Item label="2015-09-01">Technical testing</Timeline.Item>
          <Timeline.Item label="2015-09-01">Technical testing</Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};

export default EducationExperience;

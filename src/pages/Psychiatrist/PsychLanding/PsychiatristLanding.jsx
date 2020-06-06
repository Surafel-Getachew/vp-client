import React from "react";
import PsychDashboard from "../PsychDashboard/PsychDashboard";
import PsychNav from "../../../component/psychiatrist/PsychNav/PsychNav";
import "./psychLanding.css";

const PsychiatristLanding = () => {
  return (
    <div id="psych-landing">
      <div className="psych-landing-center">
        <PsychNav />
        <PsychDashboard />
      </div>
    </div>
  );
};

export default PsychiatristLanding;

import React, { useContext, useEffect } from "react";
import PsychDashboard from "../PsychDashboard/PsychDashboard";
import PsychNav from "../../../component/psychiatrist/PsychNav/PsychNav";
import "./psychLanding.css";

import AuthContext from "../../../context/auth/authContext";

const PsychiatristLanding = () => {
  const authContext = useContext(AuthContext);
  const { loadPsychiatrist,user} = authContext;
  
  useEffect(() => {
    loadPsychiatrist();
    // eslint-disable-next-line
  },[])

  return (
    <div id="psych-landing">
      <div className="psych-landing-center">
        <PsychNav user = {user}/>
        <PsychDashboard />
      </div>
    </div>
  );
};

export default PsychiatristLanding;

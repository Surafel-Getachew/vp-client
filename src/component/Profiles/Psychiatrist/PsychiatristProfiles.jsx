import React, { useContext, useEffect } from "react";
import PsychContext from "../../../context/psych/psychContext";
import PsychiatristProfileItems from "./PsychProfileItems";

const PsychiatristProfiles = () => {
  const psychContext = useContext(PsychContext);
  const { loadPsychProfiles, psychProfiles } = psychContext;
  useEffect(() => {
    loadPsychProfiles();
  }, []);

  return (
    <div>
      {/* <h1>PsychProfileComp</h1> */}
      {/* {psychProfiles.map((profile) => (
        <PsychiatristProfileItems profile={profile} />
      ))} */}
      <PsychiatristProfileItems/>
    </div>
  );
};

export default PsychiatristProfiles;

import React, { useContext, useEffect } from "react";
import PsychContext from "../../context/psych/psychContext";

import ChatNames from "./ChatNames";

const Try = (props) => {
  const psychContext = useContext(PsychContext);

  const { loadAllPsych, psychs } = psychContext;

  useEffect(() => {
    loadAllPsych();
  }, [loadAllPsych]);

  const onClick = (e) => {
    e.preventDefault();
    props.history.push("/chat");
  };

  return (
    <div>
      {psychs.map((psych) => (
        <div>
          <ChatNames psych={psych} />
        </div>
      ))}
    </div>
  );
};

export default Try;

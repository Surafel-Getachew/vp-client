import React from 'react';
import PsychPage from "../../../component/Page/PsychPage";
import {Calendar} from "antd"

const PsychSchedule = () => {
    return (
      <PsychPage>
          <div>
              <h2>Schedule</h2>
              <Calendar/>
          </div>
      </PsychPage>
    )
}

export default PsychSchedule

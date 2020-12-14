import React from "react";
// import UserPage from "../../../component/Page/User/UserPage";
import PsychiatristProfiles from "../../../component/Profiles/Psychiatrist/PsychiatristProfiles";
import Layout from "../Layout/Layout";
const PsychiatristList = () => {
  return (
    <Layout>
      <div>
        <PsychiatristProfiles />
      </div>
    </Layout>
  );
};

export default PsychiatristList;

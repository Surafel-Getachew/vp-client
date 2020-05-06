import React, { useContext, useEffect } from "react";

import ArticleContext from "../../../context/article/articleContext";

const PProfile = () => {
  const profilepic = useContext(ArticleContext);
  const { profile, profilePicture } = profilepic;

  useEffect(() => {
    profilePicture();
  }, [],profile);

  return (
    <div>
      <div>
              <img src={`data:image/png;base64,${profile}`} />
        {/* <img src={`${profile}`} /> */}
      </div>
    </div>
  );
};

export default PProfile;

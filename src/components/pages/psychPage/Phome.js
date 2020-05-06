import React, { useContext,useEffect } from "react";
import { Link } from "react-router-dom";

import ArticleContext from "../../../context/article/articleContext";
import Avatar from "./Components/Avatar";

const Phome = () => {
  const profilepic = useContext(ArticleContext);
  const { profile,profilePicture } = profilepic;

  useEffect(() => {
      profilePicture();
  },[])

    // const Example = ({profile}) => <img src={`data:image/jpeg;base64,${profile}`} />

  return (
    <div>
      <div>
        {/* <Avatar profile = {profile}/> */}
        <img src = {`${profile}`} />
              {/* <img src={JSON.stringify(`${profile}`)}/> */}
      </div>

      <div>
        <ul>
          <li>
            <Link to="/vp/psychiatrist/article">Article</Link>
          </li>
          <li>
            <Link to="/psychiatrist/groupchat">GroupChat</Link>
          </li>
          <li>
            <Link to="/psychiatrist/videochat">VideoChat</Link>
          </li>
          <li>
            <Link to="/vp/psychiatrist/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Phome;

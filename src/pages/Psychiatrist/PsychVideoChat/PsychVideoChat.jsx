import React, { useState } from "react";
import { Link } from "react-router-dom";
import PsychPage from "../../../component/Page/PsychPage";
import uuid from "uuid";
import styles from "./psych-vc.module.css";

const PsychVideoChat = () => {
  const { v4: uuidv4 } = uuid;
  const [links, setLink] = useState("");
  let roomId;
  const onClick = async () =>{
    roomId = uuidv4()
    setLink(`/vp/videochat/room/${roomId}`);
  };
  return (
    <PsychPage>
      <div className={styles.psychVcCnt}>
        <div>
          <p>Create a Meeting...</p>
        </div>
        <div onClick={onClick} className={styles.createLink}>
          <i className="fas fa-video"></i>
          <button>create</button>
        </div>
        {links === "" ? (
          ""
        ) : (
          <div>
            Generated Room Link:{" "}
            <Link target = "_blank" to = {links}>
              {links}
            </Link>
          </div>
        )}
      </div>
    </PsychPage>
  );
};

export default PsychVideoChat;

import React from "react";
import style from "./video.module.css";

import Chat from "./chat/Chat";

const Video = () => {
  return (
    <div className={style.vidiochat}>
      <video className={style.uservideo}></video>

      <video className={style.myvideo}></video>
      <div className={style.videonav}>
        <div className={style.icon}>
          <i className={` fa fa-copy `}> </i>
        </div>
        <div className={style.centericon}>
          <div className={style.icon}>
            <i className={` fa fa-microphone-alt-slash `}> </i>
          </div>

          <div className={style.iconend}>
            <i className={` fa  fa-phone-alt `}> </i>
            <span>3:00</span>
          </div>

          <div className={style.icon}>
            <i className={` fa fa-video `}> </i>
          </div>
        </div>
        <div className={style.icon}>
          <i className={` fa fa-comment-alt `}> </i>
        </div>
      </div>
      <Chat />
    </div>
  );
};

export default Video;

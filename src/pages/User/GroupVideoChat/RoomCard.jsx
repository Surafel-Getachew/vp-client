import React from "react";
import { Link } from "react-router-dom";
import { Button, Input, Select } from "antd";
import { getTimeAMPMFormat } from "../../../utils/helpers";
import styles from "./roomCard.module.css";
const { Search } = Input;
const { Option } = Select;
const RoomCard = ({ roomie }) => {
  const { _id, name, description, category, avatar, start, end } = roomie;
  return (
    <div className={styles.roomCardCnt}>
      <div className={styles.roomImage}>
        {/* <img src={require("../../../assets/family1.jpg")} alt="" /> */}
        <img src={`data:image/jpeg;base64,${avatar}`} alt="Avatar" />
      </div>
      <div className={styles.roomContentCnt}>
        <div className={styles.roomTitle}>
          <h2>{name}</h2>
        </div>
        <div className={styles.roomTime}>
          <b>Time:</b> {getTimeAMPMFormat(new Date(start))} -{" "}
          {getTimeAMPMFormat(new Date(end))}
          {/* 2:00 - 3:00 */}
        </div>
        <div className={styles.roomDescription}>
          <b>Description:</b>
          <p>{description}</p>
        </div>
        <div>
          <b>Category</b> {category}
        </div>
        <div className={styles.roomBtn}>
          <Button type="primary">
            <Link
              className={styles.articleLink}
              to={{
                pathname: `/vp/group-therapy-room/${_id}`,
                state: {
                  // id: psychOwner,
                  // article:article
                },
              }}
            >
              Join Room
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

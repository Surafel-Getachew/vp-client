import React from "react";
import { connect } from "react-redux";
import { adminDeleteRoom } from "../../../Redux/GroupVideoChat/group-video-chat-action";
import { Modal } from "antd";
import { ExclamationCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { getTimeAMPMFormat } from "../../../utils/helpers";
import styles from "./roomCard.module.css";

const { confirm } = Modal;

const RoomCard = (props) => {
  const { adminDeleteRoom } = props;
  const { _id, name, description, category, avatar, start, end } = props.room;
  function showDeleteConfirm() {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      content: "Once deleted it can't be reversed",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("OK");
        adminDeleteRoom(_id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }
  return (
    <div className={styles.roomCard}>
      <div className={styles.roomImg}>
        {/* <img src={require("../../../assets/family.jpeg")} alt="" /> */}
        <img src={`data:image/jpeg;base64,${avatar}`} alt="Avatar" />
      </div>
      <div className={styles.roomName}>
        {/* <h2>Palentosis Discussion</h2> */}
        <h2>{name}</h2>
      </div>
      <div className={styles.roomTime}>
        <h4>Time:</h4>
        <span>
          {getTimeAMPMFormat(new Date(start))} -{" "}
          {getTimeAMPMFormat(new Date(end))}
        </span>
      </div>
      <div className={styles.roomDescription}>
        <h4>Description:</h4>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, magni!
        </p> */}
        <p>{description}</p>
      </div>
      <div className={styles.roomCategory}>
        <h4>Category:</h4>
        <span>{category}</span>
      </div>
      <div className={styles.roomBtn} onClick={showDeleteConfirm}>
        <DeleteOutlined />
        <span>Delete Room</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  adminDeleteRoom,
})(RoomCard);

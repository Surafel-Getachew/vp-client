import React from "react";
import { connect } from "react-redux";
import { deleteRoom } from "../../../Redux/GroupVideoChat/group-video-chat-action";
import styles from "./roomItem.module.css";
import RoomDescription from "./RoomDescription";
import { getTimeAMPMFormat } from "../../../utils/helpers";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
const RoomItem = (props) => {
  const { rooms, deleteRoom } = props;
  const onDelete = (id) => {
    deleteRoom(id);
    // console.log("delete",id);

  };
  return (
    <div className={styles.roomItemCnt}>
      <div className={styles.roomCard}>
        <div className={styles.roomAvi}>
          <img src={`data:image/jpeg;base64,${rooms.avi}`} alt="Avatar" />
        </div>
        <RoomDescription title="Name:" value={rooms.name} />
        <RoomDescription
          title="Time:"
          value={`${getTimeAMPMFormat(
            new Date(rooms.start)
          )} - ${getTimeAMPMFormat(new Date(rooms.end))}`}
        />
        <RoomDescription title="Description:" value={rooms.description} />
        <div className={styles.roomBtnCnt}>
          <div className={styles.roomCrudBtn}>
            <DeleteOutlined
              style={{ color: "red", fontSize: "14px", fontWeight: "lighter" }}
              className={styles.deleteRoomBtn}
              onClick = {() => onDelete(rooms._id)}
            />
            <EditOutlined
              style={{
                color: "#703bda",
                fontSize: "14px",
                fontWeight: "lighter",
              }}
              className={styles.editRoom}
            />
          </div>
          <div className={styles.joinBtnCnt}>
            <Button type="primary">Join Room</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {
  deleteRoom,
})(RoomItem);
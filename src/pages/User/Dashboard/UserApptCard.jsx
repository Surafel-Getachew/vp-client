import React from "react";
import { connect } from "react-redux";
import styles from "./userApptCard.module.css";
import { getTimeAMPMFormat } from "../../../utils/helpers";
import { deleteUserAppointment } from "../../../Redux/UserAppointment/user_appt_action";
import { Modal } from "antd";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;
const UserApptCard = (props) => {
  const { deleteUserAppointment, day } = props;
  const { name, startTime, endTime, _id } = props.appt;
  function showDeleteConfirm() {
    confirm({
      title: "Are you sure delete this Psychiatrist?",
      icon: <ExclamationCircleOutlined />,
      content: "Once deleted it can't be reversed",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        // deletePsychiatrist(psychOwner);
        deleteUserAppointment(day, _id);
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }
  return (
    <div className={styles.userApptCard}>
      <div className={styles.profileCnt}>
        <div className={styles.imgCnt}>
          <img src={require("../../../assets/doctor-thumb-02.jpg")} alt="" />
        </div>
        <h4>{name}</h4>
      </div>
      <div className={styles.timeCnt}>
        <div className={styles.startTime}>
          <h4>{getTimeAMPMFormat(new Date(startTime))}</h4>
        </div>
        <div className={styles.endTime}>
          <h4>{getTimeAMPMFormat(new Date(endTime))}</h4>
        </div>
      </div>
      <div className={styles.actionCnt} onClick={showDeleteConfirm}>
        <DeleteOutlined className={styles.deleteIcon} />
        <h4>Delete Schedule</h4>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  deleteUserAppointment,
})(UserApptCard);

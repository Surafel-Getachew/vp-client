import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  addSchedule,
  clearScheduleError,
  psychTodaysSchedule,
  deletePsychSchedule,
} from "../../../Redux/Schedule/schedule_action";
import { getTimeAMPMFormat } from "../../../utils/helpers";
import { Form, Button, Space, TimePicker, Alert, Timeline } from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import styles from "./scheduleList.module.css";
const { RangePicker } = TimePicker;

const ScheduleList = (props) => {
  const {
    addSchedule,
    clearScheduleError,
    psychTodaysSchedule,
    deletePsychSchedule,
    theDate,
    errorMsg,
    todaysSchedule,
    refresh,
  } = props;

  const onFinish = (values) => {
    const formData = {
      [theDate]: [
        {
          start: values.appointment[0].time[0],
          end: values.appointment[0].time[1],
        },
      ],
    };
    // console.log(formData);
    // console.log(values);
    addSchedule(formData);
  };
  const onDelete = (id) => {
    console.log(id, "ddde");
    // const info = {
    //   id: e.target.value,
    //   date: theDate,
    // };
    // console.log(info);
    // deletePsychSchedule(info);
    console.log("deleteddd");
  };
  const [error, setError] = useState("");
  const [deleteSchdule, setDeleteSchedule] = useState("");

  useEffect(() => {
    setError(errorMsg);
    clearScheduleError();
    // eslint-disable-next-line
  }, [errorMsg]);
  // console.log(theDate);
  useEffect(() => {
    psychTodaysSchedule(theDate);
    // eslint-disable-next-line
  }, [theDate]);
  useEffect(() => {
    psychTodaysSchedule(theDate);
    // eslint-disable-next-line
  }, [refresh, theDate]);
  return (
    <div className={styles.scheduleCnt}>
      <div className={styles.appointmentForm}>
        <h3
          style={{
            textAlign: "center",
            marginBottom: "100px",
            color: "#703BDA",
          }}
        >
          Add Appointment Time's
        </h3>
        {error ? (
          <Alert
            style={{
              width: "90%",
              marginLeft: "20px",
              marginBottom: "10px",
              textAlign: "center",
            }}
            // message={`Error:  ${error}`}
            message={error}
            type="error"
          />
        ) : null}
        <Form
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.List name="appointment">
            {(fields, { add, remove }) => {
              return (
                <div>
                  {fields.map((field) => (
                    <Space
                      key={field.key}
                      style={{ display: "flex" }}
                      align="start"
                    >
                      <Form.Item
                        {...field}
                        name={[field.name, "time"]}
                        fieldKey={[field.fieldKey, "time"]}
                        rules={[{ required: true, message: "Add the time" }]}
                        style={{ marginLeft: "70px" }}
                      >
                        <RangePicker use12Hours format="hh:mm A" />
                      </Form.Item>
                      <MinusCircleOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    </Space>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      block
                      style={{ width: "80%", marginLeft: "40px" }}
                    >
                      <PlusOutlined /> Add field
                    </Button>
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>

          <Form.Item style={{ marginLeft: "15px" }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/* <div className={styles.line}></div> */}
      <div className={styles.appointmentDisplay}>
        <h3
          style={{
            textAlign: "center",
            marginBottom: "60px",
            color: "#703BDA",
          }}
        >
          Today's Schedule
        </h3>
        {todaysSchedule.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <ClockCircleOutlined style={{ fontSize: "100px", color: "#eee" }} />
            <h5
              style={{
                // textAlign: "center",
                marginTop: "20px",
                // color: "rgb(35, 129, 218)",
              }}
            >
              No Schedule Today
            </h5>
          </div>
        ) : (
          <div className={styles.todaysSchedule}>
            <Timeline className={styles.tl}>
              {todaysSchedule.map((schedule) => (
                <Timeline.Item key = {schedule._id}>
                  <span>Start Time </span>
                  <span> </span>
                  {getTimeAMPMFormat(new Date(schedule.start))}
                  <span> </span>-<span> </span>
                  <span>End Time </span>
                  {getTimeAMPMFormat(new Date(schedule.end))}
                </Timeline.Item>
              ))}
            </Timeline>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errorMsg: state.schedule.scheduleError,
  todaysSchedule: state.schedule.todaysSchedule,
  refresh: state.schedule.refresh,
});

export default connect(mapStateToProps, {
  addSchedule,
  clearScheduleError,
  psychTodaysSchedule,
  deletePsychSchedule,
})(ScheduleList);

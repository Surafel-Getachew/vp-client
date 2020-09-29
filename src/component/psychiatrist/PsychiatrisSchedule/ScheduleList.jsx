import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  addSchedule,
  clearScheduleError,
} from "../../../Redux/Schedule/schedule_action";
import { Form, Button, Space, TimePicker, Alert } from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import styles from "./scheduleList.module.css";
const { RangePicker } = TimePicker;

const ScheduleList = (props) => {
  const { addSchedule, clearScheduleError, theDate, errorMsg } = props;
  const [error, setError] = useState("");

  useEffect(() => {
    setError(errorMsg);
    clearScheduleError();
    // eslint-disable-next-line
  }, [errorMsg]);
  const onFinish = (values) => {
    const formData = {
      [theDate]: [
        {
          start: values.appointment[0].time[0],
          end: values.appointment[0].time[1],
        },
      ],
    };
    console.log(formData);
    console.log(values);
    addSchedule(formData);
  };
  return (
    <div className={styles.scheduleCnt}>
      <div className={styles.appointmentForm}>
        <h3
          style={{
            textAlign: "center",
            marginBottom: "100px",
            color: "rgb(35, 129, 218)",
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
                        <RangePicker use12Hours format="h:mm A" />
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
      <div className={styles.line}></div>
      <div className={styles.appointmentDisplay}>
        <h3
          style={{
            textAlign: "center",
            marginBottom: "60px",
            color: "rgb(35, 129, 218)",
          }}
        >
          Today's Appointment
        </h3>
        <div style={{ textAlign: "center" }}>
          <ClockCircleOutlined style={{ fontSize: "100px", color: "#eee" }} />
          <h5
            style={{
              // textAlign: "center",
              marginTop: "20px",
              // color: "rgb(35, 129, 218)",
            }}
          >
            No Appointment Today
          </h5>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errorMsg: state.schedule.scheduleError,
});

export default connect(mapStateToProps, { addSchedule, clearScheduleError })(
  ScheduleList
);

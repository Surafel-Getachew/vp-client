import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  addUserAppt,
  clearApptMsg,
} from "../../../Redux/UserAppointment/user_appt_action";
import PsychScheduleDisplay from "./PsychScheduleDisplay";
import { Form, Button, Space, TimePicker, Alert, Timeline } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import styles from "./userApptForm.module.css";
const { RangePicker } = TimePicker;

const UserApptForm = (props) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const {
    theDate,
    psychId,
    addUserAppt,
    clearApptMsg,
    errorMsg,
    successMsg,
  } = props;
  useEffect(() => {
    setError(errorMsg);
    clearApptMsg();
    // eslint-disable-next-line
  }, [errorMsg]);
  useEffect(() => {
    setSuccess(successMsg);
    clearApptMsg();
    // eslint-disable-next-line
  }, [successMsg]);
  const onFinish = (values) => {
    const formData = {
      [theDate]: [
        {
          start: values.appointment[0].time[0],
          end: values.appointment[0].time[1],
          appointedTo: psychId,
        },
      ],
    };
    addUserAppt(formData);
    console.log(formData);
  };
  //   console.log(props.location.state.id);
  return (
    <div className={styles.userApptFormCnt}>
      {error ? <Alert message={error} type="error" /> : null}
      {success ? <Alert message={success} type="success" /> : null}
      <div className={styles.apptForm}>
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
      <div className={styles.scheduleDisplay}>
        <PsychScheduleDisplay date={theDate} psychId={psychId} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errorMsg: state.userAppt.errorMsg,
  successMsg: state.userAppt.successMsg,
});

export default connect(mapStateToProps, { addUserAppt, clearApptMsg })(
  UserApptForm
);

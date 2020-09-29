import React from "react";
import PsychPage from "../../../component/Page/PsychPage";
// import {Calendar} from "antd"
import { TimePicker, Form, Button } from "antd";
import { convertAMToPM } from "../../../utils/helpers";
const { RangePicker } = TimePicker;
const PsychSchedule = () => {
  const onFinish = (values) => {
    const start = new Date(values.timeRa[0]);
    const hour = start.getHours();
    const res = convertAMToPM(hour);
    // console.log(`${res.hr}:${start.getMinutes()} ${res.AP}`);
    console.log(`${start.getHours()}:${start.getMinutes()} ${res.AP}`);
    console.log(values);
  };
  return (
    <PsychPage>
      <div>
        <h2>Schedule</h2>
        <Form onFinish={onFinish}>
          <Form.Item name="timeRa">
            <RangePicker use12Hours format="h:mm A" name="timeRange" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PsychPage>
  );
};

export default PsychSchedule;

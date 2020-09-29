import React from "react";
// import PSY from "../../component/psychiatrist/PsychNav/PsychNav";
import style from "./app.module.css";
import { Form, TimePicker, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
// import Acard from "./Acard";
import Acard from "./Acard";
import PsychPage from "../../../component/Page/PsychPage";
const { RangePicker } = TimePicker;

const PsychAppointment = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  return (
    <PsychPage>
      <div className={style.psy}>
        <Acard />
        <Acard />
        <Acard />
        <Acard />
        <Acard />
        <Acard />
        <Acard />
      </div>
    </PsychPage>
  );
};

export default PsychAppointment;

import React, { useState } from "react";
import { Form, Input, Checkbox, Button, Select } from "antd";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const ProfileSetting = () => {
  const [gender, setGender] = useState("");

  return (
    <div>
      <h1>Profile setting</h1>
      <Form layout vertical>
        <Form.Item label = "first name">
          <Input/>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileSetting;

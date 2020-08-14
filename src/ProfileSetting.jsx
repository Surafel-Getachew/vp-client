import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import FormItem from "antd/lib/form/FormItem";
import styles from "./styles.module.css"

const formItemLayout = {};

const ProfileSetting = () => {
  const onFinish = (values) => {
    console.log("success:", values);
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  return (
    <div className = {styles.formm}>
      <Form onFinish={onFinish}>
        <Form.Item
          label="username"
          name="username"
          rules={[{ required: true, message: "Enter username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
        <Button  className = {styles.btn}type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileSetting;

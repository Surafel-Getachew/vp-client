import React from "react";
import styles from "./signup.module.css";
import { Form, Input, Button, Checkbox } from "antd";
const SignUp = () => {
  return (
    <div className={styles.psychSignup}>
      <div></div>
      <div className={styles.signUpForm}>
        <Form className = {styles.antdForm}>
          <Form.Item
            label="Username"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input/>
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
        </Form>
        <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </div>
    </div>
  );
};

export default SignUp;

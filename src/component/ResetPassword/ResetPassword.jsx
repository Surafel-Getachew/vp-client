import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import style from "./style.module.css";
import AuthContext from "../../context/auth/authContext";
const ResetPassword = (props) => {
  const authContext = useContext(AuthContext);
  const { resetPassword } = authContext;
  var url = window.location;
  var token = new URLSearchParams(url.search).get("token");

  const onFinish = (values) => {
    const data = {
      password: values.password,
      token,
    };
    resetPassword(data);
  };
  return (
    <div className={style.formCnt}>
      <div className={style.lockImg}>
        <img src={require("./lock.svg")} alt="" />
      </div>
      <Form className={style.form} onFinish={onFinish}>
        <h1>Reset Password</h1>
        <Form.Item
          style={{ width: "100%" }}
          name="password"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please fill in your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (
                  !value ||
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "Password should contain one uppercase one lowercase and a number"
                );
              },
            }),
          ]}
        >
          <Input.Password
            size="large"
            placeholder="Password"
            prefix={<LockOutlined />}
          />
        </Form.Item>
        <Form.Item
          style={{ width: "100%" }}
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password
            size="large"
            placeholder="Confirm Password"
            prefix={<LockOutlined />}
            dependencies={["password"]}
            hasFeedback
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "20%" }}>
          Reset
        </Button>
      </Form>
    </div>
  );
};

export default ResetPassword;

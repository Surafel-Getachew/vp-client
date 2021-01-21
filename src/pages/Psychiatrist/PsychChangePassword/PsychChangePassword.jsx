import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../component/Layout/Layout";
import AuthContext from "../../../context/auth/authContext";
import { Input, Form, Button, Alert } from "antd";
import { LockOutlined } from "@ant-design/icons";
import styles from "./psychChangePassword.module.css";
const PsychChangePassword = () => {
  const authContext = useContext(AuthContext);
  const { changePassword, successMsg, error } = authContext;
  const [msg, setMsg] = useState({
    msgText: "",
    msgType: "",
  });
  const { msgText, msgType } = msg;
  const onFinish = (values) => {
    console.log(values);
    changePassword(values);
  };
  useEffect(() => {
    setMsg({ msgText: successMsg, msgType: "success" });
    setTimeout(() => {
      setMsg({ msgText: "", msgType: "" });
    }, 3000);
  }, [successMsg]);
  useEffect(() => {
    setMsg({ msgText: error, msgType: "error" });
    setTimeout(() => {
      setMsg({ msgText: "", msgType: "" });
    }, 3000);
  }, [error]);
  return (
    <Layout>
      <div className={styles.changePasswordCnt}>
        <Form
          className={styles.changePasswordForm}
          onFinish={onFinish}
          scrollToFirstError
        >
          {msgText === null ? null : (
            <Alert
              style={{ width: "250px" }}
              message={msgText}
              type={msgType}
            />
          )}

          <h2>Change Password</h2>
          <Form.Item
            style={{ width: "100%" }}
            name="oldPassword"
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
              placeholder="Old Password"
              //   className={style.input}
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item
            style={{ width: "100%" }}
            name="newPassword"
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
              placeholder="New Password"
              //   className={style.input}
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item
            style={{ width: "100%" }}
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please confirm your new password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("newPassword") === value) {
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
              placeholder="Confirm New Password"
              //   className={style.input}
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            // size={size}
            style={{ width: "40%" }}
          >
            Change Password
          </Button>
        </Form>
      </div>
    </Layout>
  );
};

export default PsychChangePassword;

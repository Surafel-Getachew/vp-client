import React, { useContext, useEffect, useState } from "react";
import AdminContext from "../../../context/adminAuth/adminAuthContext";
import Layout from "../Layout/Layout";
import { Input, Form, Button, Alert } from "antd";
import { LockOutlined } from "@ant-design/icons";
import styles from "./changePass.module.css";

const AdminChangePassword = () => {
  const adminContext = useContext(AdminContext);
  const { adminChangePassword, successMsg, error } = adminContext;
  const [msg, setMsg] = useState({
    msgText: "",
    msgType: "",
  });
  const { msgText, msgType } = msg;
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
  const onFinish = (values) => {
    console.log(values);
    adminChangePassword(values);
  };
  return (
    <Layout>
      <div className={styles.changePassCnt}>
        <Form className={styles.formCnt} onFinish={onFinish} scrollToFirstError>
          {msgText === null ? null : (
            <Alert
              style={{ width: "250px" }}
              message={msgText}
              type={msgType}
            />
          )}
          <h1 style={{ color: "#AAAAAA" }}>Change Password</h1>
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
              prefix={<LockOutlined />}
              //   className={style.input}
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

export default AdminChangePassword;

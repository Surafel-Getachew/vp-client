import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import style from "../form.module.css";
import { Input, Form, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import FormComponent from "../FormComponent";
import AuthContext from "../../../../context/auth/authContext";
const SignIn = () => {
  const authContext = useContext(AuthContext);
  const { psychiatristLogin, isAuthenticated } = authContext;
  const [size, setSize] = useState("large");
  const [redirect, setRedirect] = useState(false);
  const onFinish = (values) => {
    console.log(values);
    if (values) {
      psychiatristLogin(values);
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      setRedirect(true);
    }
  }, [isAuthenticated]);
  if (redirect) {
    return <Redirect to="/vp/psychiatrist/dashboard" />;
  }
  return (
    <FormComponent>
      <div className={style.signup}>
        <Form style={{ width: "100%" }} onFinish={onFinish} scrollToFirstError>
          <h1> SignIn</h1>

          <Form.Item
            style={{ width: "100%" }}
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<MailOutlined />}
              size="large"
              placeholder="Email"
              className={style.input}
            />
          </Form.Item>
          <Form.Item
            style={{ width: "100%" }}
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              size="large"
              placeholder="Password"
              className={style.input}
              prefix={<LockOutlined/>}
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            size={size}
            style={{ width: "70%" }}
          >
            Sign In
          </Button>

          <p>
            You don't have account? <Button type="link">Sign IN</Button>
          </p>
        </Form>
      </div>
    </FormComponent>
  );
};

export default SignIn;

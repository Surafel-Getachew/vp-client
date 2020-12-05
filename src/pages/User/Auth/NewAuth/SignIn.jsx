import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import style from "./form.module.css";
import { Input, Form, Button,Alert } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import FormComponent from "./FormComponent";
import ForgotPasswordEmail from "../../../../component/ForgotPasswordEmail/ForgotPasswordEmail";
import AuthContext from "../../../../context/auth/authContext";
const SignIn = () => {
  const authContext = useContext(AuthContext);
  const { login, isAuthenticated,showForgotPassword,showForgotPasswordState,error,clearErrors } = authContext;
  const [size, setSize] = useState("large");
  const [redirect, setRedirect] = useState(false);
  const [errorMsg,setErrorMsg] = useState()
  const toggleForgotPassword = () => {
    showForgotPassword();
  }
  const onFinish = (values) => {
    if (values) {
      login(values);
    }
  };
  useEffect(() => {
    setErrorMsg(error);
    clearErrors();
    // eslint-disable-next-line
  },[error])
  useEffect(() => {
    if (isAuthenticated) {
      setRedirect(true);
    }
  }, [isAuthenticated]);
  if (redirect) {
    return <Redirect to="/vp/user/dashboard" />;
  }
  return (
    <FormComponent>
      <div className={style.signup}>
      {errorMsg ? <Alert style = {{width:"500px"}} message={errorMsg} type="error" /> : null}
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
              prefix={<LockOutlined />}
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
          <p><Button onClick = {toggleForgotPassword} type = "link">Forgot password?</Button></p>
          <p>
            Don't have an account?<Button type="link">Sign Up</Button>
          </p>
        </Form>
      </div>
      {showForgotPasswordState && <ForgotPasswordEmail/>}
    </FormComponent>
  );
};

export default SignIn;

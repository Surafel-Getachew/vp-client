import React, { useState, useContext, useEffect } from "react";
import style from "../form.module.css";
import { UserOutlined, LockOutlined,MailOutlined } from "@ant-design/icons";
import { Input, Form, Button } from "antd";
import FormContainer from "../FormComponent";
import AuthContext from "../../../../context/auth/authContext";
import { Redirect } from "react-router-dom";

const SignUp = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, registerPsychiatrist } = authContext;
  const [size, setSize] = useState("large");
  const [redirect, setRedirect] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    if (values) {
      console.log(values);
      registerPsychiatrist(values);
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
    <FormContainer>
      <div className={style.signup}>
        <Form style={{ width: "100%" }} onFinish={onFinish} scrollToFirstError>
          <h1> SignUp</h1>

          <Form.Item
            style={{ width: "100%" }}
            name="name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input
              size="large"
              placeholder="Full Name"
              className={style.input}
              prefix={<UserOutlined/>}
            />
          </Form.Item>
          <Form.Item
            style={{ width: "100%" }}
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input prefix={<MailOutlined/>} size="large" placeholder="Email" className={style.input} />
          </Form.Item>
          <Form.Item
            style={{ width: "100%" }}
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              size="large"
              placeholder="Password"
              className={style.input}
              prefix={<LockOutlined/>}
            />
          </Form.Item>
          {/* <Form.Item
            style={{ width: "100%" }}
            name="confirmPassword"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              size="large"
              placeholder="Confirm Password"
              className={style.input}
            />
          </Form.Item> */}
          <Button
            type="primary"
            htmlType="submit"
            size={size}
            style={{ width: "70%" }}
          >
            SignUp
          </Button>
          <p>
            You have account?<Button type="link">Sign IN</Button>
          </p>
        </Form>
      </div>
    </FormContainer>
  );
};

export default SignUp;

import React, { useState, useContext, useEffect } from "react";
import style from "./form.module.css";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Input, Form, Button } from "antd";
import FormContainer from "./FormComponent";
import { Redirect } from "react-router-dom";
import AuthContext from "../../../../context/auth/authContext";
const fullNameRegEx = /(?=^.{0,48}$)(^[a-zA-Z/\\]{3,16})+\s(|\s|\s\s)([a-zA-Z/\\]{3,16})(|\s|\s\s)+(|([a-zA-Z/\\]{3,16}))$/;
const tooLongNameRegEx = /(?=^.{0,48}$)(^[a-zA-Z/\\]{16,})$/;
const invalidCharacterRegEx = /^([\s]|[a-zA-Z/\\])+([\s]{1}|[a-zA-Z/\\]+)*$/;
const tooMuchNameRegEx = /^([\S]{1,16})(|\s)+(|[\S]{1,16})(|\s)+(|[\S]{1,16})$/;
const SignUp = () => {
  const authContext = useContext(AuthContext);
  const { register, isAuthenticated } = authContext;
  const [size, setSize] = useState("large");
  const [redirect, setRedirect] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    if (values) {
      console.log(values);
      register(values);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      setRedirect(true);
    }
  }, [isAuthenticated]);
  if (redirect) {
    return <Redirect to="/vp/user/dashboard" />;
  }
  return (
    <FormContainer>
      <div className={style.signup}>
        <Form style={{ width: "100%" }} onFinish={onFinish} scrollToFirstError>
          <h1> SignUp User</h1>

          <Form.Item
            style={{ width: "100%" }}
            name="name"
            rules={[
              {
                required: true,
                message: "Please fill in your Full Name!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || fullNameRegEx.test(value.trim())) {
                    return Promise.resolve();
                  } else if (!value || !fullNameRegEx.test(value.trim())) {
                    if (!value || !invalidCharacterRegEx.test(value)) {
                      return Promise.reject("Invalid Characters in Name");
                    } else if (value == null || value.trim() === "") {
                      return Promise.reject("Name only contains whitespace");
                    } else if (!value || !tooMuchNameRegEx.test(value.trim())) {
                      return Promise.reject("Enter your proper full name");
                    } else if (
                      !value ||
                      tooLongNameRegEx.test(value.trim().split(" ")[0])
                    ) {
                      return Promise.reject("Name is too Long");
                    } else if (
                      value.split(" ").length === 1 ||
                      value.split(" ")[1] === ""
                    ) {
                      if (
                        !value ||
                        !fullNameRegEx.test(value.trim().split(" ")[0])
                      ) {
                        return Promise.reject("Enter your Full Name");
                      }
                    }
                    return Promise.reject(
                      "Each name should have 3 or more characters"
                    );
                  } else if (!value || !tooMuchNameRegEx.test(value)) {
                    return Promise.reject(
                      "Enter your first,last and family name"
                    );
                  }
                  return Promise.reject("Enter Full Name");
                },
              }),
            ]}
          >
            <Input
              size="large"
              placeholder="Full Name"
              className={style.input}
              prefix={<UserOutlined />}
            />
          </Form.Item>
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
              className={style.input}
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
              className={style.input}
              prefix={<LockOutlined />}
              dependencies={["password"]}
              hasFeedback
            />
          </Form.Item>
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

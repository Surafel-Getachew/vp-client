import React,{useContext,useEffect,useState} from "react";
import {Redirect} from "react-router-dom";
import AdminAuthContext from "../../../context/adminAuth/adminAuthContext"
import { Input, Form, Button, Alert } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./auth.module.css";
const Signin = () => {
    const adminAuthContext = useContext(AdminAuthContext);
    const {signinAdmin,error,isAuthenticated} = adminAuthContext;
    const [redirect,setRedirect] = useState(false);
    const onFinish = (values) => {
      signinAdmin(values);
  };
  useEffect(() => {
    if(isAuthenticated) {
      setRedirect(true)
    }
  },[isAuthenticated])
  if (redirect) {
    return <Redirect to="/vp/admin/dashboard" />;
  }
  return (
    <div className={styles.signupCnt}>
      <div className={styles.authImg}>
        <img src={require("../../../assets/authImage.svg")} alt="" />
      </div>
      <div className={styles.formCnt}>
        <Form
          style={{ width: "100%" }}
          onFinish={onFinish}
          className={styles.formItemCnt}
          scrollToFirstError
        >
          <h1>ADMIN SIGNIN</h1>
          <Form.Item
            style={{ width: "50%" }}
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<MailOutlined />}
              size="large"
              placeholder="Email"
            //   className={style.input}
            />
          </Form.Item>
          <Form.Item
            style={{ width: "50%" }}
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              size="large"
              placeholder="Password"
            //   className={style.input}
              prefix={<LockOutlined />}
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            // size={size}
            style={{ width: "20%" }}
          >
            Sign In
          </Button>

          <p>
            You don't have account? <Button type="link">Sign Up</Button>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Signin;

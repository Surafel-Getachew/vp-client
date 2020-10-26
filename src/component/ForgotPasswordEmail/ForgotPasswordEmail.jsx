import React, { useContext,useState,useEffect } from "react";
import { Input, Form, Button, Alert } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import Filter from "../Filter/Filter";
import style from "./style.module.css";
import AuthContext from "../../context/auth/authContext";
const ForgotPasswordEmail = () => {
  const [alert,setAlert] = useState()
  const authContext = useContext(AuthContext);
  const { resetPasswordEmail, responseMsg, error, successMsg } = authContext;
  useEffect(() => {
    setAlert(responseMsg)
  },[responseMsg])
  const onFinish = (values) => {
    if (values) {
      resetPasswordEmail(values);
    }
  };
  return (
    <div>
      <Filter />
      <div className={style.card}>
        <div className={style.cardImg}>
          <img src={require("./undraw_envelope_n8lc.svg")} alt="" />
        </div>
        <div className={style.cardTitle}>
          <h1>Restore password</h1>
        </div>
        <div className={style.cardInfo}>
          <p>
            Enter your <b>email address</b> you used to sign in. We will send
            you an email with a link to reset your password.
          </p>
        </div>
        {alert !== null ?  (alert === "Confirmation Email sent, please check your email" ? (
          <Alert
            style={{
              width: "90%",
              marginLeft: "20px",
            }}
            message={`${alert}`}
            type="success"
          />
        ) : (
          <Alert
            style={{
              width: "60%",
              marginLeft: "60px",
            }}
            message={`Error:  ${alert}`}
            type="error"
          />
        )) : null}
       
        {/* {error && (
          <Alert
            style={{
              width: "60%",
              marginLeft: "60px",
            }}
            message={`Error:  ${error}`}
            type="error"
          />
        )}
        {successMsg && (
          <Alert
            style={{
              width: "60%",
              marginLeft: "60px",
            }}
            message={`${successMsg}`}
            type="success"
          />
        )} */}
        <Form style={{ marginTop: "20px" }} onFinish={onFinish}>
          <Form.Item
            style={{ width: "90%" }}
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              style={{
                marginLeft: "10px",
              }}
              size="medium"
              placeholder="Enter your email"
            />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "30%", borderRadius: "15px", marginLeft: "250px" }}
          >
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPasswordEmail;

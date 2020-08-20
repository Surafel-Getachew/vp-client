import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import PsychPage from "../../../component/Page/PsychPage";
import styles from "./psychProfile.module.css";
const PsProfile = () => {
  const [form] = Form.useForm();
  return (
    <PsychPage>
      <Form form={form}>
        <div className={styles.profileCard}>
          <div className={styles.profileCardCenter}>
            <div className={styles.profileCardTitle}>
              <h4>Basic Information</h4>
            </div>
            <div className={styles.profileCardForm}>
              <Form.Item label="FirstName">
                <Input placeholder="firstname" />
              </Form.Item>
              <Form.Item label="SecondName">
                <Input placeholder="secondname" />
              </Form.Item>
            </div>
          </div>
        </div>
        <div className={styles.profileCard}>
          <div className={styles.profileCardCenter}>
            <div className={styles.profileCardTitle}>
              <h4>About</h4>
            </div>
            <div className={styles.profileCardForm}>
              <Form.Item name={["user", "introduction"]} label="Introduction">
                <Input.TextArea />
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
    </PsychPage>
  );
};

export default PsProfile;

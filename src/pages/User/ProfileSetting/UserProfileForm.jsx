import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  addUserProfile,
  loadUserProfile,
} from "../../../Redux/UserProfile/userProfile_action";
import Layout from "../Layout/Layout";
import styles from "./profileSetting.module.css";
import { Upload, message, Form, Input, Radio, Button } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const UserProfileForm = (props) => {
  const { addUserProfile, userProfile, loadUserProfile } = props;
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [avi, setAvi] = useState(null);
  const [profile, setUserProfile] = useState({});
  useEffect(() => {
    if (!userProfile) loadUserProfile();
    if (userProfile) {
      setUserProfile({ ...userProfile });
    }
  }, [userProfile]);
  const { name, gender, avatar } = profile;
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      setAvi(info.file.originFileObj);
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImgUrl(imageUrl);
        setLoading(false);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const onFinish = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("gender", values.gender);
    formData.append("avatar", avi);
    addUserProfile(formData);
  };
  const [form] = Form.useForm();
  form.setFieldsValue({
      name,
      gender,
      avatar
  })
  return (
    <Layout>
      <div className={styles.profileFormCnt}>
        <h2>Edit Profile</h2>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="avatar" label="Avatar">
            <Upload
              name="avatar"
              listType="picture-card"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imgUrl ? (
                <img src={imgUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            value={name}
            rules={[
              {
                required: true,
              },
            ]}
            style={{ width: "400px" }}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item name="gender" label="Gender">
            <Radio.Group>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.userProfile.userProfile,
});
export default connect(mapStateToProps, {
  addUserProfile,
  loadUserProfile,
})(UserProfileForm);

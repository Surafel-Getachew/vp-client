import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  createRoom,
  getMyRooms,
  searchRoomForPsych,
} from "../../../Redux/GroupVideoChat/group-video-chat-action";
import { Upload, message, Form, Input, TimePicker, Select, Button } from "antd";
import {
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import RoomItem from "./RoomItem";
import Layout from "../../../component/Layout/Layout";
import styles from "./groupvideo.module.css";
const { RangePicker } = TimePicker;
const { TextArea, Search } = Input;
const { Option } = Select;
const PsychGroupVideoChat = (props) => {
  const {
    createRoom,
    getMyRooms,
    searchRoomForPsych,
    psychRooms,
    refresh,
  } = props;
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [groupPhoto, setGroupPhoto] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    getMyRooms();
  }, []);
  useEffect(() => {
    getMyRooms();
  }, [refresh]);
  useEffect(() => {
    if (searchValue == "") {
      getMyRooms();
    }
  }, [searchValue]);
  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
    const searchText = {
      searchText: e.target.value,
    };
    searchRoomForPsych(searchText);
  };

  const onSearch = () => {
    const searchText = {
      searchText: searchValue,
    };
    searchRoomForPsych(searchText);
  };
  const onGroupPhoto = ({ fileList }) => {
    // if (fileList[0].originFileObj == undefined) {
    if (fileList == undefined) {
      setGroupPhoto(null);
    }
    setGroupPhoto(fileList[0].originFileObj);
  };
  // const handleChange = (info) => {
  //   if (info.file.status === "uploading") {
  //     setLoading(true);
  //     return;
  //   }
  //   if (info.file.status === "done") {
  //     // Get this url from response in real world.
  //     setGroupPhoto(info.file.originFileObj);
  //     getBase64(info.file.originFileObj, (imageUrl) => {
  //       setImageUrl(imageUrl);
  //       setLoading(false);
  //     });
  //   }
  // };
  // const getBase64 = (img, callback) => {
  //   const reader = new FileReader();
  //   reader.addEventListener("load", () => callback(reader.result));
  //   reader.readAsDataURL(img);
  // };
  // const beforeUpload = (file) => {
  //   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  //   if (!isJpgOrPng) {
  //     message.error("You can only upload JPG/PNG file!");
  //   }
  //   const isLt2M = file.size / 1024 / 1024 < 2;
  //   if (!isLt2M) {
  //     message.error("Image must smaller than 2MB!");
  //   }
  //   return isJpgOrPng && isLt2M;
  // };
  // const uploadButton = (
  //   <div>
  //     {loading ? <LoadingOutlined /> : <PlusOutlined />}
  //     <div style={{ marginTop: 8 }}>Upload</div>
  //   </div>
  // );
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const formData = new FormData();
    formData.append("start", values.time[0]);
    formData.append("end", values.time[1]);
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("category", values.category);
    formData.append("avatar", groupPhoto);
    createRoom(formData);
  };
  return (
    <Layout>
      <div className={styles.groupVideoCnt}>
        <div className={styles.groupVideoCenter}>
          <div className={styles.roomFormCnt}>
            <h3>Create Room</h3>
            {/* <Upload
              name="avatar"
              listType="picture-card"
              // className="avatar-uploader"
              className={styles.avatarInput}
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload> */}
            <Form form={form} onFinish={onFinish}>
              <Form.Item name="avatar" label="Avatar">
                <Upload onChange={onGroupPhoto}>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Name Of The Room" />
              </Form.Item>
              <Form.Item
                name="time"
                label="Time"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <RangePicker use12Hours format="hh:mm A" />
              </Form.Item>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <TextArea
                  placeholder="Room Description"
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Form.Item>
              <Form.Item
                name="category"
                label="Category"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  showSearch
                  // style={{ width: 200 }}
                  placeholder="Select Category"
                  optionFilterProp="children"
                  // onChange={onTagChange}
                  // value={articleTag}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="Addiction">Addiction</Option>
                  <Option value="Family">Family</Option>
                  <Option value="Social">Social</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
              {/* <Form.Item
                name="category"
                label="Category"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  mode="tags"
                  tokenSeparators={[","]}
                  placeholder="Category Of The Room"
                  // style={{ width: "80%" }}
                ></Select>
              </Form.Item> */}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.createBtn}
                >
                  Create
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className={styles.roomListCnt}>
            <Search
              className = {styles.psychGroupSearch}
              placeholder="input search text"
              allowClear
              value={searchValue}
              onChange={onSearchChange}
              onSearch={onSearch}
              style={{ width: 200, margin: "0 10px" }}
            />
            <div className={styles.roomCards}>
              {psychRooms.map((room) => (
                <RoomItem rooms={room} key={room._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  psychRooms: state.groupVideoChat.psychRooms,
  refresh: state.groupVideoChat.refresh,
});

export default connect(mapStateToProps, {
  createRoom,
  getMyRooms,
  searchRoomForPsych,
})(PsychGroupVideoChat);

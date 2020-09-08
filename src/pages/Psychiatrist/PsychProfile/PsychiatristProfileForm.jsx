import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  addPsychProfile,
  loadPsychProfile,
} from "../../../Redux/PsychProfile/psych_profile_aciton";
import {
  Form,
  Input,
  Button,
  Radio,
  Upload,
  Select,
  Tag,
  Space,
  DatePicker,
} from "antd";
import {
  UploadOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import PsychPage from "../../../component/Page/PsychPage";
import ProfileCard from "../../../component/ProfileInputCard/ProfileCard";

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};
const { TextArea } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;
const services = [];
for (let i = 10; i < 36; i++) {
  services.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const servicesTag = () => {
  return (
    <Tag color="cyan" closable={true} style={{ marginRight: 3 }}>
      {services}
    </Tag>
  );
};

const PsychiatristProfileForm = (props) => {
  const [profile, setProfile] = useState({});
  // if error like can not read propery of null appear later, adding initial state to useState of profile will work
  const { psychProfile, addPsychProfile, loadPsychProfile } = props;

  useEffect(() => {
    if (!psychProfile) loadPsychProfile();
    if (psychProfile) {
      setProfile({ ...psychProfile });
    }
    // eslint-disable-next-line
  }, [psychProfile]);

  const onFinish = (values) => {
    if (values) {
      console.log(values);
      addPsychProfile(values);
    }
  };
  const {
    name,
    gender,
    city,
    state,
    country,
    about,
    specializations,
    service,
    education,
    experience
  } = profile;
  const [form] = Form.useForm();
  form.setFieldsValue({
    name,
    gender,
    city,
    state,
    country,
    about,
    specializations,
    service,
    education,
    // experience
  });
  return (
    <PsychPage>
      <Form form={form} onFinish={onFinish}>
        <ProfileCard title="Basic Information">
          <Form.Item
            name="upload"
            label="Profile Picture"
            valuePropName="fileList"
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item name="name" label="Full Name">
            <Input style={{ width: "90%" }} value={name} />
          </Form.Item>
          <Form.Item name="gender" label="Gender">
            <Radio.Group defaulValue={profile.gender}>
              <Radio style={radioStyle} value="Male">
                Male
              </Radio>
              <Radio style={radioStyle} value="Female">
                Female
              </Radio>
            </Radio.Group>
          </Form.Item>
        </ProfileCard>
        <ProfileCard title="Address">
          <Form.Item name="city" label="City">
            <Input style={{ width: "90%" }} />
          </Form.Item>
          <Form.Item name="state" label="State">
            <Input style={{ width: "90%" }} />
          </Form.Item>
          <Form.Item name="country" label="Country">
            <Input style={{ width: "90%" }} />
          </Form.Item>
        </ProfileCard>
        <ProfileCard title="About">
          <Form.Item name="about" label="About Me">
            <TextArea
              allowClear
              autoSize={{ minRows: 4, maxRows: 6 }}
              rows={6}
              cols={20}
              style={{ padding: "20px 0px" }}
            />
          </Form.Item>
        </ProfileCard>
        <ProfileCard title="Service and Specialization">
          {/* <Form.Item name="services" label = "services">
            <Select
              mode="tags"
              // tagRender={servicesTag}
              style={{ width: "20%", height: "20%" }}
              tokenSeparators={[","]}
            >
            </Select>
            <Select
              mode="tags"
              showArrow
              // defaultValue={["gold", "cyan"]}
              style={{ width: "100%" }}
              tokenSeparators={[","]}
              // options={options}
            />
          </Form.Item> */}
          {/* <Form.Item name="services" label = "services" >
            <Select
              mode="tags"
              tokenSeparators={[","]}
            >
            </Select>
          </Form.Item> */}
          <Form.Item name="specializations" label="specializations">
            <Select
              mode="tags"
              tokenSeparators={[","]}
              style={{ width: "80%" }}
            ></Select>
          </Form.Item>
          <Form.Item name="service" label="services">
            <Select
              mode="tags"
              tokenSeparators={[","]}
              style={{ width: "80%" }}
            ></Select>
          </Form.Item>
        </ProfileCard>
        <ProfileCard title="Education">
          <Form.List name="education">
            {(fields, { add, remove }) => {
              return (
                <div>
                  {fields.map((field) => (
                    <Space
                      key={field.key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="start"
                    >
                      <Form.Item
                        {...field}
                        name={[field.name, "educationStatus"]}
                        fieldKey={[field.fieldKey, "educationStatus"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing education status",
                          },
                        ]}
                      >
                        <Input placeholder="Education Status" />
                      </Form.Item>
                      <Form.Item
                        {...field}
                        name={[field.name, "Inistitute"]}
                        fieldKey={[field.fieldKey, "Inistitute"]}
                        rules={[
                          { required: true, message: "Missing Inistitute" },
                        ]}
                      >
                        <Input placeholder="Inistitute" />
                      </Form.Item>

                      <MinusCircleOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    </Space>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      block
                    >
                      <PlusOutlined /> Add field
                    </Button>
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </ProfileCard>
        <ProfileCard title="Experience">
          <Form.List name="experience">
            {(fields, { add, remove }) => {
              return (
                <div>
                  {fields.map((field) => (
                    <Space
                      key={field.key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="start"
                    >
                      <Form.Item
                        {...field}
                        name={[field.name, "workplace"]}
                        fieldKey={[field.fieldKey, "workplace"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing Work Place",
                          },
                        ]}
                      >
                        <Input placeholder="Work Place" />
                      </Form.Item>
                      <Form.Item
                        {...field}
                        name={[field.name, "years"]}
                        fieldKey={[field.fieldKey, "years"]}
                        rules={[{ required: true, message: "Missign Years" }]}
                      >
                        <RangePicker picker="year" />
                      </Form.Item>

                      <MinusCircleOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    </Space>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      block
                    >
                      <PlusOutlined /> Add field
                    </Button>
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </ProfileCard>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </PsychPage>
  );
};
const mapStateToProps = (state) => ({
  psychProfile: state.psychProfile.psychProfile,
});
export default connect(mapStateToProps, { addPsychProfile, loadPsychProfile })(
  PsychiatristProfileForm
);

import React from "react";
// import PSY from "../../component/psychiatrist/PsychNav/PsychNav";
import style from "./app.module.css";
import { Form, TimePicker, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { RangePicker } = TimePicker;

const Acard = () => {
  // const onFinish = (values) => {
  //   console.log("Received values of form:", values);
  // };
  const onFinish = (value) => {
    console.log(value);
  };
  const [form] = Form.useForm();
  return (
    <div className={style.card}>
      <h2>Monday</h2>
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <Space style={{ display: "flex", marginBottom: 2 }} align="start">
          <Form.Item style={{ display: "flex", marginBottom: "10px" }}>
            <RangePicker />
          </Form.Item>
        </Space>

        <Form.List name="users">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field) => (
                  <Space
                    key={field.key}
                    style={{ display: "flex", marginBottom: 2 }}
                    align="start"
                  >
                    <Form.Item
                      style={{ display: "flex", marginBottom: "10px" }}
                      {...field}
                      name={[field.name, "first"]}
                      fieldKey={[field.fieldKey, "first"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <RangePicker />
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
      </Form>
    </div>
  );
};

export default Acard;

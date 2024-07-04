import { Button, Form, Input } from "antd";
import React, { useState } from "react";

function NewTask(props) {
  const { handleAddTask } = props;

  const [form] = Form.useForm();

  const handleOnFinish = (v) => {
    handleAddTask(v.task);
    form.resetFields();
  };

  return (
    <div className="">
      <Form
        form={form}
        className="flex gap-x-5 w-[40%]"
        onFinish={handleOnFinish}
      >
        <Form.Item
          name="task"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input placeholder="Add Task" />
        </Form.Item>
        <Button htmlType="submit">Add</Button>
      </Form>
    </div>
  );
}

export default NewTask;

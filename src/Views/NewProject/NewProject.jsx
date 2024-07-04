import { Button, Form } from "antd";
import React, { useRef, useState } from "react";
import Input from "../../components/Input";
import DatePicker from "../../components/DatePicker";
import Modal from "../../components/Modal";

function NewProject(props) {
  const { handleSaveProject, handleCancelAddProject } = props;

  const [date, setDate] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [form] = Form.useForm();

  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.input.value;
    const enteredDescription =
      descriptionRef.current.resizableTextArea.textArea.value;
    const enteredDueDate = date;

    const invalidTitle =
      form.getFieldError("title").length > 0 || enteredTitle.trim() === "";
    const invalidDescription =
      form.getFieldError("description").length > 0 ||
      enteredTitle.trim() === "";
    const invalidDueDate =
      form.getFieldError("dueDate").length > 0 || enteredTitle.trim() === "";

    if (invalidTitle || invalidDescription || invalidDueDate) {
      setOpenModal(true);
      return;
    }

    handleSaveProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal
        centered
        destroyOnClose
        open={openModal}
        className="font-poppins"
        onCancel={() => setOpenModal(false)}
      >
        <h2 className="text-2xl font-semibold">Invalid input</h2>
        <div className="my-5">
          <p>Oops ... look like you forgot to enter a value</p>
          <p>Please make sure to provide a valid value</p>
        </div>
      </Modal>
      <Form layout="vertical" form={form} onFinish={(e) => console.log(e)}>
        <div className="flex">
          <p className="font-poppins w-full text-2xl font-bold text-secondary">
            Create New Project
          </p>

          <div className="flex gap-x-5 mb-5 justify-end w-full">
            <Button className="font-poppins" onClick={handleCancelAddProject}>
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleSave}
              className="!bg-primary text-white font-poppins"
            >
              Save
            </Button>
          </div>
        </div>

        <Input
          label="Title"
          name="title"
          placeholder="Please input Title"
          ref={titleRef}
        />
        <Input
          textarea
          name="description"
          label="Description"
          ref={descriptionRef}
          placeholder="Please input Description"
        />
        <DatePicker
          name="dueDate"
          label="Due Date"
          onChange={(_, v) => setDate(v)}
          placeholder="Please input Due Date"
        />
      </Form>
    </>
  );
}

export default NewProject;

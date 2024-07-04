import { Form, Input as AntInput } from "antd";
import React, { forwardRef } from "react";

const { TextArea } = AntInput;

const Input = forwardRef(function Input(props, ref) {
  const { label, placeholder, textarea, name, ...otherProps } = props;

  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: true, message: "Required" }]}
    >
      {textarea ? (
        <TextArea
          ref={ref}
          rows={4}
          placeholder={placeholder}
          {...otherProps}
        />
      ) : (
        <AntInput ref={ref} placeholder={placeholder} {...otherProps} />
      )}
    </Form.Item>
  );
});

export default Input;

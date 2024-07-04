import { Form, DatePicker as AntDatePicker } from "antd";
import React, { forwardRef } from "react";

const DatePicker = forwardRef(function DatePicker(props, ref) {
  const { label, placeholder, name, ...otherProps } = props;

  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: true, message: "Required" }]}
    >
      <AntDatePicker
        className="w-full"
        ref={ref}
        placeholder={placeholder}
        {...otherProps}
      />
    </Form.Item>
  );
});

export default DatePicker;

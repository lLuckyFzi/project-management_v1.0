import React from "react";
import { Button as AntButton } from "antd";
import { twMerge } from "tailwind-merge";

function Button(props) {
  const { children, className, ...otherProps } = props;

  return (
    <AntButton
      {...otherProps}
      className={twMerge(
        className,
        "text-center font-poppins !bg-primary text-white border-none hover:!text-primary hover:!bg-white"
      )}
    >
      {children}
    </AntButton>
  );
}

export default Button;

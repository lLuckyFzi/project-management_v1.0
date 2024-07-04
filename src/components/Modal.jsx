import React from "react";
import { createPortal } from "react-dom";
import { Modal as AntModal } from "antd";

function Modal(props) {
  const { children, ...otherProps } = props;

  return createPortal(
    <AntModal {...otherProps} footer>
      {children}
    </AntModal>,
    document.getElementById("modal-root")
  );
}

export default Modal;

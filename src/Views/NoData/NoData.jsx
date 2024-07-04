import { Image } from "antd";
import React from "react";

import NoDataImg from "./../../assets/no-data.png";
import Button from "../../components/Button";

function NoData(props) {
  const { onAddProject } = props;

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center">
        <Image preview={false} src={NoDataImg} width={450} />
        <div className="text-center font-poppins">
          <p className="text-3xl font-semibold">No Project Selected</p>
          <p>Select a project or get started with a new one</p>
        </div>
        <Button onClick={onAddProject} className="my-10">
          Create New Project
        </Button>
      </div>
    </div>
  );
}

export default NoData;

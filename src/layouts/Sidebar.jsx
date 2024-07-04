import React from "react";
import { Layout } from "antd";
import { LuFilePlus } from "react-icons/lu";
import Button from "../components/Button";
import { twMerge } from "tailwind-merge";

const { Sider } = Layout;

function Sidebar(props) {
  const { projects, onAddProject, handleSelectProject, selectedProjectId } =
    props;

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={false}
      style={{
        backgroundColor: "white",
      }}
      width={250}
    >
      <div className="my-5 px-5">
        <span className="text-secondary text-lg font-bold font-poppins">
          Project Management
        </span>
      </div>
      <hr className="border-b border-secondary" />
      <div className="flex flex-col gap-y-3 my-5 px-5">
        <span className="text-secondary text-xl font-bold font-poppins">
          Your Project
        </span>
        <Button className="my-0" icon={<LuFilePlus />} onClick={onAddProject}>
          Add Project
        </Button>
      </div>
      <div className="px-5 font-poppins w-full flex flex-col gap-y-5 mt-10">
        {projects?.map((d) => {
          return (
            <span
              key={d.id}
              onClick={() => handleSelectProject(d.id)}
              className={twMerge(
                d.id === selectedProjectId
                  ? "bg-primary text-white rounded-md p-2"
                  : "bg-gray-100 rounded-md w-full block p-2 hover:bg-primary duration-100 hover:text-white cursor-pointer"
              )}
            >
              {d.title}
            </span>
          );
        })}
      </div>
    </Sider>
  );
}

export default Sidebar;

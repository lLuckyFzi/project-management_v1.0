import { Button } from "antd";
import React from "react";
import Task from "./Partials/Task";

function SelectedProject(props) {
  const {
    tasks,
    project,
    handleDeleteProject,
    handleDeleteTask,
    handleAddTask,
  } = props;

  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div>
      <div className="flex justify-between mb-5 font-poppins">
        <div className="font-poppins">
          <p className="text-3xl font-semibold">{project.title}</p>
          <p className="text-gray-400">{formattedDate}</p>
        </div>
        <div>
          <Button
            type="primary"
            onClick={handleDeleteProject}
            className="!bg-red-500 font-poppins"
          >
            Delete
          </Button>
        </div>
      </div>
      <p className="text-xl border-b-gray-500 border-b whitespace-pre-wrap">
        {project.description}
      </p>
      <Task
        tasks={tasks}
        handleAddTask={handleAddTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default SelectedProject;

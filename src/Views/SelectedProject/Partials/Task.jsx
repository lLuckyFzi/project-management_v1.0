import { Button } from "antd";
import React from "react";
import NewTask from "./NewTask";

function Task(props) {
  const { tasks, handleAddTask, handleDeleteTask } = props;

  const isTaskEmpty = tasks.length === 0;

  return (
    <div className="my-5">
      <p className="text-2xl mb-5 font-semibold">Task</p>
      <NewTask handleAddTask={handleAddTask} />
      {isTaskEmpty ? (
        <p className="font-poppins my-5">
          This project does not have any task yet.
        </p>
      ) : (
        <>
          {tasks?.map((d) => {
            return (
              <div
                key={d.id}
                className="font-poppins bg-gray-50 w-[40%] p-2 rounded-md flex justify-between items-center my-3"
              >
                <span>{d.text}</span>
                <Button
                  type="text"
                  className="p-0 font-poppins"
                  onClick={() => handleDeleteTask(d.id)}
                >
                  Clear
                </Button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Task;

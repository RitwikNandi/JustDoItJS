import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useGLobalContext } from "../context";

const Task = () => {
  const { removeAllTask } = useGLobalContext();

  return (
    <div>
      <TaskForm />
      <TaskList />
      <button onClick={() => removeAllTask()}>Clear All!</button>
    </div>
  );
};

export default Task;

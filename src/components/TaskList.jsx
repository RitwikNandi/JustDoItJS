import React from "react";
import { useGLobalContext } from "../context";

const TaskList = () => {
  const { taskList, removeTask } = useGLobalContext();

  return (
    <div>
      <ul>
        {taskList.map((tasks) => {
          const { id, task, deadLine } = tasks;
          return (
            <li key={id}>
              <h6>
                {task} <span>{deadLine}</span>
              </h6>

              <button onClick={() => removeTask(id)}>remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;

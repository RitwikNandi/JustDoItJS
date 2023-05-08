import React from "react";
import { useGLobalContext } from "../context";

const TaskList = () => {
  const { taskList, removeTask } = useGLobalContext();

  return (
    <div className='task-container'>
      {taskList.map((tasks) => {
        const { id, task, deadLine } = tasks;
        return (
          <article className='task-item' key={id}>
            {console.log(id)}
            <h4 className='title'>
              <p>{task}</p>
              <p className='title'>complete it by {deadLine} days</p>
            </h4>
            <div className='btn-container'>
              <button className='delete-btn' onClick={() => removeTask(id)}>
                Completed
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default TaskList;

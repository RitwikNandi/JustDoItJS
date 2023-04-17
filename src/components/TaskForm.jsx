import React from "react";
import { useGLobalContext } from "../context";

const TaskForm = () => {
  const { handleSubmit } = useGLobalContext();
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' placeholder='complete this goddamn app' />
        <br />
        <input type='number' placeholder='deadline in days' />
        <button type='submit'>Add!</button>
      </form>
    </div>
  );
};

export default TaskForm;

import React from "react";
import { useGLobalContext } from "../context";

const TaskForm = () => {
  const { handleSubmit } = useGLobalContext();
  return (
    <div className='section-center'>
      <form onSubmit={(e) => handleSubmit(e)} className='task-form'>
        <h3>Just Do It!!!</h3>
        <div className='form-control'>
          <input
            type='text'
            placeholder='complete this goddamn app'
            className='task'
          />
          <input
            type='number'
            placeholder='deadline in days'
            className='task'
          />
          <button className='submit-btn' type='submit'>
            Add!
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;

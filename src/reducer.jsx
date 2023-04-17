import { HANDLE_TASK, HANDLE_DELETE } from "./helper";

const reducer = (state, action) => {
  switch (action.type) {
    case HANDLE_TASK:
      return {
        ...state,
        id: action.payload.id,
        task: action.payload.task,
        deadLine: action.payload.deadLine,
        taskList: [...state.taskList, action.payload],
      };

    case HANDLE_DELETE:
      return {
        ...state,
        taskList: state.taskList.filter((task) => {
          return task.id !== action.payload;
        }),
      };

    default:
      console.log(`the action ${action.type} is not defined`);
      break;
  }
};

export default reducer;

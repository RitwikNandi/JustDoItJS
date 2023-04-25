import { HANDLE_SUBMIT, HANDLE_DELETE, HANDLE_DELETE_ALL } from "./helper";

const reducer = (state, action) => {
  switch (action.type) {
    case HANDLE_SUBMIT:
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

    case HANDLE_DELETE_ALL:
      return {
        ...state,
        taskList: [],
      };

    default:
      console.log(`the action ${action.type} is not defined`);
      break;
  }
};

export default reducer;

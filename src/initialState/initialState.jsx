export const initialState = {
  id: 0,
  task: ``,
  deadLine: 0,
  taskList: localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList"))
    : [],
};

export const getLocalStorage = () => {
  if (localStorage.getItem("taskList")) {
    return JSON.parse(localStorage.getItem("taskList"));
  } else return initialState.taskList;
};

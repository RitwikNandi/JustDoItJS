export default {
  id: 0,
  task: ``,
  deadLine: 0,
  isEditing: false,
  editId: null,
  taskList: localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList"))
    : [],
};

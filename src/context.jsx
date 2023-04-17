import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { HANDLE_TASK, HANDLE_DELETE } from "./helper";
import initialState from "./initialState/initialState";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleChange = (task) => {
  //   console.log(initalState.task);
  //   console.log(initalState.taskList);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: HANDLE_TASK,
      payload: {
        id: new Date().getTime().toString(),
        task: e.target[0].value,
        deadLine: e.target[1].value,
      },
    });
    console.log(state);
  };

  const removeTask = (id) => {
    dispatch({
      type: HANDLE_DELETE,
      payload: id,
    });
  };

  useEffect(() => {
    //dunno what to do here so...
    document.title = `Just Do It!!!`;
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleSubmit,
        removeTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGLobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

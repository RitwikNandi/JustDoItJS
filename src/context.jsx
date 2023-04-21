import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { HANDLE_TASK, HANDLE_DELETE } from "./helper";
import initialState from "./initialState/initialState";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target[0].value !== "" || e.target[1].value !== "") {
      dispatch({
        type: HANDLE_TASK,
        payload: {
          id: new Date().getTime().toString(),
          task: e.target[0].value,
          deadLine: e.target[1].value,
        },
      });
      e.target[0].value = "";
      e.target[1].value = null;
    } else {
      console.log(`no task was entered`);
    }
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
        taskInput,
        deadLineInput,
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

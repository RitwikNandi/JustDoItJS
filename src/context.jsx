import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { HANDLE_SUBMIT, HANDLE_DELETE, HANDLE_DELETE_ALL } from "./helper";
import initialState from "./initialState/initialState";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  document.title = `Just Do It!!!`;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target[0].value !== "" || e.target[1].value !== "") {
      dispatch({
        type: HANDLE_SUBMIT,
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
      payload: { id },
    });
  };

  const removeAllTask = () => {
    dispatch({
      type: HANDLE_DELETE_ALL,
    });
  };

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(state.taskList));
  }, [state.taskList]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleSubmit,
        removeTask,
        removeAllTask,
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

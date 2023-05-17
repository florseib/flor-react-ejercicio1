import { createContext, useState } from "react";
import { reducer, initialState } from "../helpers/reducer";
import { useReducer } from "react";

export const ToDoContext = createContext();

export const ToDoContextProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { list, setList, state, dispatch };

  return <ToDoContext.Provider value={data}>{children}</ToDoContext.Provider>;
};

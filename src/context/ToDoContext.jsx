import { createContext, useState } from "react";

export const ToDoContext = createContext();

export const ToDoContextProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const data = { list, setList };

  return <ToDoContext.Provider value={data}>{children}</ToDoContext.Provider>;
};

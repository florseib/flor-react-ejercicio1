import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToDoContextProvider } from "./context/ToDoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToDoContextProvider>
      <App />
    </ToDoContextProvider>
  </React.StrictMode>
);

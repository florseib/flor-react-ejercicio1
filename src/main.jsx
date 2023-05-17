import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToDoContextProvider } from "./context/ToDoContext";
import { AppHeader } from "./components/AppHeader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToDoContextProvider>
      <AppHeader></AppHeader>
      <App />
    </ToDoContextProvider>
  </React.StrictMode>
);

import "./App.css";
import { ToDoList } from "./components/ToDoList";
import { PokeApi } from "./components/PokeApi";
import { Routes } from "./routes/Routes";
import { HomePage } from "./components/HomePage";
import { useContext, useEffect } from "react";
import { ToDoContext } from "./context/ToDoContext";

function App() {
  const { setList } = useContext(ToDoContext);

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("list")) || []);
  }, []);

  return (
    <>
      <Routes></Routes>
      {/* <ToDoList></ToDoList>
      <PokeApi></PokeApi>
      <HomePage></HomePage> */}
    </>
  );
}

export default App;

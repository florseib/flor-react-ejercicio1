import "./App.css";
import { ToDoList } from "./components/ToDoList";
import { PokeApi } from "./components/PokeApi";
import { Routes } from "./routes/Routes";
import { HomePage } from "./components/HomePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadList } from "./redux/slice/ToDoSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadList(JSON.parse(localStorage.getItem("list")) || []));
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

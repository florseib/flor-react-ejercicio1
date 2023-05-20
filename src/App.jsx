import "./App.css";
import { ToDoList } from "./components/ToDoList";
import { PokeApi } from "./components/PokeApi";
import { Routes } from "./routes/Routes";
import { HomePage } from "./components/HomePage";

function App() {
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

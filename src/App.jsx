import "./App.css";
import { ToDoList } from "./components/ToDoList";
import { PokeApi } from "./components/PokeApi";
import { HomePage } from "./components/HomePage";

// TODO:
// -Routing
// -Mostrar en pantalla la API
// -Reducers para mostrar errores (en el ToDo como en la API)
// -Usar redux?
// -Alinear input PokeAPI

function App() {
  return (
    <>
      {/* <ToDoList></ToDoList> */}
      {/* <PokeApi></PokeApi> */}
      <HomePage></HomePage>
    </>
  );
}

export default App;

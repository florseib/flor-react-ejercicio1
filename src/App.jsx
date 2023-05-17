import "./App.css";
import { ToDoList } from "./components/ToDoList";
import { PokeApi } from "./components/PokeApi";

// TODO:
// -Routing
// -Mostrar en pantalla la API
// -Reducers para mostrar errores (en el ToDo como en la API)
// -Usar redux?

function App() {
  return (
    <>
      <ToDoList></ToDoList>
      {/* <PokeApi></PokeApi> */}
    </>
  );
}

export default App;

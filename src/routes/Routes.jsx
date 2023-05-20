import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
} from "react-router-dom";
import { HomePage } from "../components/HomePage";
import { PokeApi } from "../components/PokeApi";
import { ToDoList } from "../components/ToDoList";
import { AppHeader } from "../components/AppHeader";

export const Routes = () => {
  return (
    <Router>
      <AppHeader></AppHeader>
      <ReactRoutes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/pokeapi" element={<PokeApi />}></Route>
        <Route path="/todolist" element={<ToDoList />}></Route>
      </ReactRoutes>
    </Router>
  );
};

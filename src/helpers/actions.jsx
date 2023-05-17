import axios from "axios";
import { ToDoContext } from "../context/ToDoContext";
import { useContext } from "react";

export const submitTodo = (e) => {
  e.preventDefault();
  if (listInput.current.value) {
    localStorage.setItem(
      "list",
      JSON.stringify([...list, listInput.current.value])
    );
    setList([...list, listInput.current.value]);

    listInput.current.value = null;
  }
};

export const submitPokeAPI = async (e, pokemon) => {
  e.preventDefault();

  const { dispatch } = useContext(ToDoContext);

  try {
    let selectedPokemon = pokemon.toLowerCase().trim();

    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
    );
    console.log(data);
    dispatch({ type: "success", pokemon: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: "notFound" });
  }
};

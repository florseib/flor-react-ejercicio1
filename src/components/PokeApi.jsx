import {
  FlexContainer,
  FlexContainerCol,
  InputContainer,
  FormPokeAPI,
  Input,
  Button,
} from "../assets/Styles";
import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { reducer, initialState } from "../helpers/pokeapiReducer";
import { useReducer } from "react";
import { PokeInfo } from "./PokeInfo";
import axios from "axios";

export const PokeApi = () => {
  const [pokemonInput, setPokemon] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState);

  const submitPokeAPI = async (e, pokemon) => {
    e.preventDefault();
    let selectedPokemon = pokemon.toLowerCase().trim();

    if (!selectedPokemon) {
      dispatch({ type: "emptyField" });
      return;
    }

    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
      );
      console.log(data);
      dispatch({ type: "success", pokemon: data });
    } catch (err) {
      console.log(err);
      dispatch({ type: "notFound" });
    }
    setPokemon("");
  };

  return (
    <FlexContainerCol>
      <FormPokeAPI
        onSubmit={(e) => {
          submitPokeAPI(e, pokemonInput);
        }}
      >
        {/* <InputContainer> */}
        <Input
          value={pokemonInput}
          onChange={(e) => setPokemon(e.target.value)}
        ></Input>{" "}
        <Button type="submit">Search</Button>
        {/* </InputContainer> */}
      </FormPokeAPI>
      <div>
        {state.error && <ErrorMessage>{state.error}</ErrorMessage>}
        {state.pokemon && <PokeInfo {...state.pokemon} />}
      </div>
    </FlexContainerCol>
  );
};

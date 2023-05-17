import {
  FlexContainer,
  FlexContainerCol,
  FormPokeAPI,
  Input,
  Button,
} from "../assets/Styles";
import { useContext, useState } from "react";
import { ToDoContext } from "../context/ToDoContext";
import { submitPokeAPI } from "../helpers/actions";
import { ErrorMessage } from "./ErrorMessage";

export const PokeApi = () => {
  const [pokemonInput, setPokemon] = useState("");
  const { state } = useContext(ToDoContext);

  return (
    <FlexContainerCol>
      <FormPokeAPI
        onSubmit={(e) => {
          submitPokeAPI(e, pokemonInput);
        }}
      >
        {/* <FlexContainer> */}
        <Input
          value={pokemonInput}
          onChange={(e) => setPokemon(e.target.value)}
        ></Input>{" "}
        <Button type="submit">Search</Button>
        {/* </FlexContainer> */}
      </FormPokeAPI>
      <div style={{ width: "20%" }}>
        {state.error && <ErrorMessage>{state.error}</ErrorMessage>}
        In progress
      </div>
    </FlexContainerCol>
  );
};

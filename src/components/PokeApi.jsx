import {
  FlexContainer,
  FlexContainerCol,
  FormPokeAPI,
  Input,
  Button,
} from "../assets/Styles";
import { useState } from "react";
import { submitPokeAPI } from "../helpers/actions";

export const PokeApi = () => {
  const [pokemon, setPokemon] = useState("");
  return (
    <FlexContainerCol>
      <FormPokeAPI
        onSubmit={(e) => {
          submitPokeAPI(e, pokemon);
        }}
      >
        {/* <FlexContainer> */}
        <Input
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
        ></Input>{" "}
        <Button type="submit">Search</Button>
        {/* </FlexContainer> */}
      </FormPokeAPI>
      <div style={{ width: "20%" }}>
        {/* {list.length !== 0 ? (
            <ListComponent>
              {list.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ListComponent>
          ) : (
            <NoItemsMessage>No hay ítems</NoItemsMessage>
          )} */}
        In progress
      </div>
    </FlexContainerCol>
  );
};

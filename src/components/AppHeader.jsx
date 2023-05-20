import { useContext } from "react";
import { Header } from "../assets/Styles";
import { MenuContent, LinkContainer, Link } from "../assets/Styles.jsx";
import { ToDoContext } from "../context/ToDoContext";

export const AppHeader = () => {
  const { list } = useContext(ToDoContext);

  return (
    <Header>
      <MenuContent>
        <LinkContainer>
          <Link to="/">MAIN PAGE</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to="/pokeapi">POKÉMON</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to="/todolist" red={list.length > 0 ? 1 : 0}>
            TO-DO LIST{list.length > 0 ? ` (${list.length})` : ""}
          </Link>
        </LinkContainer>
      </MenuContent>
    </Header>
  );
};

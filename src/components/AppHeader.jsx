import { Header } from "../assets/Styles";
import { MenuContent, LinkContainer, Link } from "../assets/Styles.jsx";

export const AppHeader = () => {
  
  return (
    <Header>
      <MenuContent>
        <LinkContainer>
          <Link>MAIN PAGE</Link>
        </LinkContainer>
        <LinkContainer>
          <Link>POKÉMON</Link>
        </LinkContainer>
        <LinkContainer>
          <Link>TO-DO LIST</Link>
        </LinkContainer>
      </MenuContent>
    </Header>
  );
};

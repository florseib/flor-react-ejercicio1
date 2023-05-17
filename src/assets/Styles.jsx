import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexContainerCol = styled(FlexContainer)`
  flex-direction: column;
`;

export const FlexContainerButtons = styled(FlexContainer)`
  margin-top: 1rem;
`;

export const Button = styled.button`
  width: 120px;
  margin: 0 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const FormCol = styled(Form)`
  flex-direction: column;
`;

export const FormPokeAPI = styled(Form)`
  justify-content: center;
`;

export const Input = styled.input`
  width: 30%;
  height: 1.5rem;
  font-size: 1rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  background-color: #444444;
  width: 100%;
  height: 8vh;
  position: absolute;
  top: 0px;
  left: 0px;
  border-bottom: 2px solid rgb(255, 115, 0);
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 15px;
`;

export const LinkContainer = styled.div`
  margin: 0px 15px;
  font-size: 1.2em;
`;

export const Link = styled.a`
  color: ${(p) => (p.red ? "red" : "#ffffff")};
  cursor: pointer;
`;

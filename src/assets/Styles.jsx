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
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  width: 30%;
  height: 1.5rem;
  font-size: 1rem;
`;

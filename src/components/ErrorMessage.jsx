import styled from "styled-components";

const ErrorDiv = styled.div`
  color: red;
  font-size: 1.3rem;
`;

export const ErrorMessage = ({ children }) => {
  return <ErrorDiv>{children}</ErrorDiv>;
};

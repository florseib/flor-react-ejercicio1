import styled from "styled-components";

const ListComponent = styled.ul`
  font-size: 1.3rem;
  text-align: left;
`;

const NoItemsMessage = styled.div`
  font-size: 1.3rem;
  margin-top: 16px;
`;

export const ToDoList = ({ listItems }) => {
  return (
    <div style={{ width: "20%" }}>
      {listItems.length !== 0 ? (
        <ListComponent>
          {listItems.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ListComponent>
      ) : (
        <NoItemsMessage>No hay ítems</NoItemsMessage>
      )}
    </div>
  );
};

import { useContext, useEffect, useRef, useState } from "react";
import { ToDoContext } from "../context/ToDoContext";
import {
  FlexContainerCol,
  FlexContainerButtons,
  Button,
  FormCol,
  Input,
} from "../assets/Styles";
import styled from "styled-components";
import { submitTodo } from "../helpers/actions";

const ListComponent = styled.ul`
  font-size: 1.3rem;
  text-align: left;
`;

const NoItemsMessage = styled.div`
  font-size: 1.3rem;
  margin-top: 16px;
`;

export const ToDoList = () => {
  const { list, setList } = useContext(ToDoContext);
  const listInput = useRef();

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("list")) || []);
  }, []);

  const deleteList = (e) => {
    e.preventDefault();
    setList([]);
    listInput.current.value = null;

    localStorage.setItem("list", null);
  };

  return (
    <FlexContainerCol>
      <FormCol onSubmit={submitTodo}>
        <Input ref={listInput}></Input>
        <FlexContainerButtons>
          <Button type="submit">Add</Button>
          <Button onClick={deleteList}>Delete All</Button>
        </FlexContainerButtons>
      </FormCol>
      <div style={{ width: "20%" }}>
        {list.length !== 0 ? (
          <ListComponent>
            {list.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ListComponent>
        ) : (
          <NoItemsMessage>No hay ítems</NoItemsMessage>
        )}
      </div>
    </FlexContainerCol>
  );
};

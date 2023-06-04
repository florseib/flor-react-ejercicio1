import { useRef, useState } from "react";
import {
  FlexContainerCol,
  FlexContainerButtons,
  Button,
  FormCol,
  Input,
} from "../assets/Styles";
import styled from "styled-components";
import { ErrorMessage } from "./ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { emptyList, add } from "../redux/slice/ToDoSlice";

const ListComponent = styled.ul`
  font-size: 1.3rem;
  text-align: left;
`;

const NoItemsMessage = styled.div`
  font-size: 1.3rem;
  margin-top: 16px;
`;

export const ToDoList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  const [error, setError] = useState("");

  const listInput = useRef();

  const deleteList = (e) => {
    setError("");
    e.preventDefault();
    if (
      list.length > 0 &&
      confirm("Are you sure you want to delete every element in the list?")
    ) {
      dispatch(emptyList());
      listInput.current.value = null;

      localStorage.setItem("list", null);
    }
  };

  const submitTodo = (e) => {
    e.preventDefault();
    setError("");
    if (listInput.current.value) {
      if (list.some((x) => x === listInput.current.value))
        setError("You already have an identical item in your list.");
      else {
        localStorage.setItem(
          "list",
          JSON.stringify([...list, listInput.current.value])
        );
        dispatch(add(listInput.current.value));

        listInput.current.value = null;
      }
    } else {
      setError("Please input something into the field.");
    }
  };

  return (
    <FlexContainerCol>
      <FormCol onSubmit={submitTodo}>
        <Input ref={listInput} onChange={() => setError("")}></Input>
        <FlexContainerButtons>
          <Button type="submit">Add</Button>
          <Button onClick={deleteList}>Delete All</Button>
        </FlexContainerButtons>
      </FormCol>
      {error && <ErrorMessage>{error}</ErrorMessage>}

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

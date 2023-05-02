import { useEffect, useRef, useState } from "react";
import "./App.css";
import { ToDoList } from "./components/ToDoList";
import {
  FlexContainerCol,
  FlexContainerButtons,
  Button,
  Form,
  Input,
} from "./assets/Styles";

function App() {
  const [listItems, setListItems] = useState([]);
  const listInput = useRef();

  useEffect(() => {
    setListItems(JSON.parse(localStorage.getItem("list")) || []);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listInput.current.value) {
      localStorage.setItem(
        "list",
        JSON.stringify([...listItems, listInput.current.value])
      );
      setListItems([...listItems, listInput.current.value]);

      listInput.current.value = null;
    }
  };

  const deleteList = (e) => {
    e.preventDefault();
    setListItems([]);
    listInput.current.value = null;

    localStorage.setItem("list", null);
  };

  return (
    <>
      <FlexContainerCol>
        <Form onSubmit={handleSubmit}>
          <Input ref={listInput}></Input>
          <FlexContainerButtons>
            <Button type="submit">Add</Button>
            <Button onClick={deleteList}>Delete All</Button>
          </FlexContainerButtons>
        </Form>
        <ToDoList listItems={listItems}></ToDoList>
      </FlexContainerCol>
    </>
  );
}

export default App;

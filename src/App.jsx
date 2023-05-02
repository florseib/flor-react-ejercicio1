import { useRef, useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listInput.current.value) {
      setListItems([...listItems, listInput.current.value]);
      listInput.current.value = null;
      console.log(listItems);
    }
  };

  const deleteList = (e) => {
    e.preventDefault();
    setListItems([]);
    listInput.current.value = null;
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

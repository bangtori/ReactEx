import { useState } from "react";
import TodoContainer from "./components/TodoContainer";
import TodoInputField from "./components/TodoInputField";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 9장까지",
      checked: true
    },
    {
      id: 2,
      text: "Todo 스타일링",
      checked: true
    },
    {
      id: 3,
      text: "Todo 기능완성",
      checked: false
    },
  ])
    return (
      <TodoContainer>
        <TodoInputField />
        <TodoList todos={todos} />
      </TodoContainer>
    )
}

export default App;

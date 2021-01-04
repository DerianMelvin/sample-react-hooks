import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn React",
      isCompleted: false,
    },
    {
      text: "Grab a lunch",
      isCompleted: false,
    },
    {
      text: "Take a short nap",
      isCompleted: false,
    },
  ]);

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => {
          return <Todo key={index} index={index} todo={todo} />
        })}
      </div>
    </div>
  );
}

export default App;

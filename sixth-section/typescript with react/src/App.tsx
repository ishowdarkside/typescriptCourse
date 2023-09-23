import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import NewTodo from "./components/NewToDo";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  const [items, setItems] = useState<{ text: string; id: string }[]>([]);

  function setToDos(text: string) {
    setItems((curr) => [...curr, { text, id: Math.random().toString() }]);
  }

  function todoDeleteHandler(id: string) {
    setItems((currItems) => currItems.filter((e) => e.id !== id));
  }

  return (
    <div className="app">
      <NewTodo setToDos={setToDos} />
      <ToDoList items={items} onTodoDelete={todoDeleteHandler} />
    </div>
  );
}

export default App;

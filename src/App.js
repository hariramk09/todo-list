import React, { Component, useEffect, useState } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import "./App.css";

const App = () => {
  let [todos, setTodos] = useState([]);

  const editTodo = (id, val) => {
    let tempTodo = [...todos];
    let updatedArr = tempTodo.map((e, i) => {
      if (e.id == id) {
        e.title = val;
        e.isEdit = false;
      }
      return e;
    });
    setTodos(updatedArr);
  };

  const updateToEdit = (id) => {
    let tempTodo = [...todos];
    let updatedArr = tempTodo.map((e, i) => {
      if (e.id == id) {
        e.isEdit = true;
      }
      return e;
    });
    setTodos(updatedArr);
  };

  const deleteTodo = (id) => {
    let tempTodo = [...todos];
    let updatedArr = tempTodo.filter((e, i) => e.id != id);
    setTodos(updatedArr);
  };

  const addTodo = (val) => {
    let tempTodo = [...todos];
    let tempObj = {};
    tempObj.title = val;
    tempObj.id = tempTodo.length + 1;
    tempObj = { ...tempObj };
    tempTodo.unshift(tempObj);
    setTodos(tempTodo);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className="App">
      <AddTodo Add={addTodo} />
      <Todos
        todoList={todos}
        Edit={editTodo}
        ToEdit={updateToEdit}
        Delete={deleteTodo}
      />
    </div>
  );
};

export default App;

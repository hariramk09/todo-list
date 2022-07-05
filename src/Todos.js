import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  if (props.todoList.length < 1) return;

  return props.todoList.map((e, i) => {
    return (
      <Todo
        todo={e}
        editTodo={props.Edit}
        updateToEdit={props.ToEdit}
        deleteTodo={props.Delete}
      />
    );
  });
};

export default Todos;

import React, { useState } from "react";

const Todo = (props) => {
  let [text, setText] = useState(props.todo.title);

  const textOnChange = (e) => {
    setText(e.currentTarget.value);
  };
  return (
    <span>
      <p id={props.todo.id}>
        {props.todo.isEdit ? (
          <input type="text" value={text} onChange={(e) => textOnChange(e)} />
        ) : (
          props.todo.title
        )}
      </p>
      {props.todo.isEdit ? (
        <button
          onClick={() => {
            props.editTodo(props.todo.id, text);
          }}
        >
          Done
        </button>
      ) : (
        <button
          onClick={() => {
            props.updateToEdit(props.todo.id);
            setText(props.todo.title);
          }}
        >
          Edit
        </button>
      )}
      <button onClick={() => props.deleteTodo(props.todo.id)}>Delete</button>
    </span>
  );
};

export default Todo;

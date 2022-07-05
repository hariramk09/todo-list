import React, { useState } from "react";

const AddTodo = (props) => {
  let [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
        type="text"
      />
      <button
        onClick={(e) => {
          props.Add(text);
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;

import React from "react";

function Todo(props) {
  return (
    <p>
      <strong>Todo: </strong> {props.item.task}
    </p>
  );
}

export default Todo;

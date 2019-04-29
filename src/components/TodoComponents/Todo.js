import React from "react";

export default function Todo(props) {
  let classNames = "todo";
  if (props.todo.completed) {
    classNames += " completed";
  }

  function updateCompleted() {
    props.toggleComplete(props.todo.id);
  }

  return (
    <div className={classNames} onClick={updateCompleted}>
      <p>{props.todo.task}</p>
    </div>
  );
}

import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleComplete={props.toggleComplete} />
      ))}
    </div>
  );
}

import React from "react";
import { render } from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";

function App() {
  return (
    <div className="app">
      <TodoList />
    </div>
  );
}
render(<App />, document.getElementById("root"));

import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./index.scss";

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  addTodo = todo => {
    this.setState({
      todos: [
        ...this.state.todos,
        { task: todo, id: Date.now(), completed: false }
      ]
    });
  };

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    });
  };

  removeCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <div className="app">
        <h2>Welcome to your Todo App!</h2>

        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleCompleted}
        />
        <TodoForm addTodo={this.addTodo} />
        <button onClick={this.removeCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;

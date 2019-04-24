import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

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
      todosOnState: todos,
      todo: {
        task: "",
        id: Date.now(),
        completed: false
      }
    };
  }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todosOnState: [...this.state.todosOnState, this.state.todo],
      todo: {
        task: "",
        id: Date.now(),
        completed: false
      }
    });
  };

  handleChange = event => {
    // console.log(event.target.value);
    this.setState({
      todo: {
        ...this.state.todo,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoList array={this.state.todosOnState} />
        <TodoForm
          task={this.state.todo.task}
          handleChange={this.handleChange}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;

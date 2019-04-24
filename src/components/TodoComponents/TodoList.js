import React from "react";
import Todo from "./Todo";

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

class TodoList extends React.Component {
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

  handleChanges = event => {
    console.log(event.target.value);
    this.setState({
      todo: {
        ...this.state.todo,
        [event.target.name]: event.target.value
      }
    });
  };

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

  render() {
    return (
      <div>
        {console.log(this.state)}
        <h1>Todo Items:</h1>

        <div className="todo-list">
          {this.state.todosOnState.map(todo => (
            <Todo item={todo} />
          ))}
        </div>

        <form onSubmit={this.addTodo}>
          <input
            placeholder="Enter your todo..."
            value={this.state.todo.task}
            onChange={this.handleChanges}
            name="task"
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default TodoList;

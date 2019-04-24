import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <form onSubmit={this.props.addTodo}>
        <input
          placeholder="Enter your todo here..."
          value={this.props.task}
          onChange={this.props.handleChange}
          name="task"
        />

        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;

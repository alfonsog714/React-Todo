import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        {console.log(this.state)}
        <h1>Todo Items:</h1>

        <div className="todo-list">
          {this.props.array.map(todo => (
            <Todo item={todo} />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;

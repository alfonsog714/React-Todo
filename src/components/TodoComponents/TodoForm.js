import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  onUpdate = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="input"
          id="new-todo"
          value={this.state.input}
          onChange={this.onUpdate}
        />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.removeTodo(this.props.id);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>x</button>
        <button>Edit</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo;

import React, { Component } from "react";

class Todo extends Component {
  render() {
    return <li>{this.props.task}</li>;
  }
}

export default Todo;

import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }
  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo task={todo.task} removeTodo={this.remove} id={todo.id} />
    ));
    return (
      <div>
        <h1>Todo List With React</h1>
        <NewTodoForm createTodo={this.create} />
        {todos}
      </div>
    );
  }
}
export default TodoList;

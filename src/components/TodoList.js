import { value } from "../seedData";
import React, { Component } from "react";
import Title from "./Title";
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      key: value
    };
  }
  render() {
    console.log(this.state.todos);
    return (
      <div className="TodoList">
        <Title titleName="My todo list" />
        <ul>
          {this.state.key.map((todo, index) => {
            return <li>{todo.name} </li>;
          })}
        </ul>
      </div>
    );
  }
}
export default TodoList;

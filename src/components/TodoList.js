import { todos } from "../seedData";
import React, { Component } from "react";
import Title from "./Title";
import Todo from "./Todo";
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      inputValue: ""
    };
  }
  handleClick(eachTodo,index){
    // const changedTodo=this.state.eachTodo[index];
    const updatedTodo={...eachTodo,isCompleted:true};
    console.log('handleClick updatedTodo',updatedTodo);
    console.log('index',index);
    this.setState({
      todos:[...this.state.todos.slice(0,index),
        updatedTodo,...this.state.todos.slice(index+1)]
    })
  };

  handleNewTodo(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  addNewTodo() {
    const newTodo = {
      name: this.state.inputValue,
      isCompleted: false
    };
    console.log('this.state',this.state);
    this.setState({
      todos: [...this.state.todos, newTodo],
      inputValue: ""
    });
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="TodoList">
        <Title titleName="My todo list" />
        <ul>
          {this.state.todos.map((eachTodo, index) => {
            return (
              <Todo todoId={index} todo={eachTodo} handleClick={()=>this.handleClick(eachTodo,index)} />
            )
            
          })}
        </ul>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={event => this.handleNewTodo(event)}
        />
        <button onClick={() => this.addNewTodo()}>Add Todo</button>
      </div>
    );
  }
}
export default TodoList;

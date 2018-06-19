import { todos } from "../seedData";
import React, { Component } from "react";
import Title from "./Title";
import Todo from "./Todo";
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      key: todos,
      inputValue: ""
    };
  }
  handleClick(eachTodo,index){
    // const changedTodo=this.state.eachTodo[index];
    const updatedTodo={...eachTodo,isCompleted:true};
    this.setState({
      key:[...this.state.key.slice(0,index),
        updatedTodo,this.state.key.slice(index+1)]
    })
  };
  handleNewTodo(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  addNewTodo() {
    const newTodo = {
      key: this.state.inputValue,
      isCompleted: false
    };
    this.setState({
      key: [...todos, newTodo]
    });
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="TodoList">
        <Title titleName="My todo list" />
        <ul>
          {this.state.key.map((eachTodo, index) => {
            return (
              <Todo key={index} todo={eachTodo} handleClick={()=>this.handleClick(eachTodo,index)} />
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

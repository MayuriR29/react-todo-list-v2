import { todos } from "../seedData";
import React, { Component } from 'react';
import Title from "./Title"
class TodoList extends Component {
    constructor(){
       super();
       this.state = {
          todos :todos
       }
    }
  render() {
    return (
    <div className="TodoList">
    <Title props="My todo list"/>
    {this.state.todos.map((val,index)=>{
        return(
        <ul>
            <li>{val.name} </li>
        </ul>
        )
    })

    }
    </div>
    );
  }
}
export default TodoList
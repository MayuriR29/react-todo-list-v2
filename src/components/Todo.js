import React from 'react';
const Todo=((props)=>{
    return(
        props.todo.isCompleted === true ? (
            <li id="done" >
              {props.todo.name}{" "}
            </li>
          ) : (
            <li >{props.todo.name} </li>
          )
    )
    
});
export default Todo;
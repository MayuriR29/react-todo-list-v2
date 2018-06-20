import React from 'react';
const Todo=((props)=>{
    return(        
            <li id={props.todo.isCompleted ?"done":''} key={props.todoId}
            onClick={props.handleClick}>
              {props.todo.name}
            </li>
    )
    
});
export default Todo;
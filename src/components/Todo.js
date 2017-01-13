import React from 'react';


const Todo = ({ onClick, completed, text, deleteTodo}) => ( 
  <li  className={ completed ? 'completed' : '' } >
    <div className="view">
      <input 
        onClick={ onClick }
        className="toggle" 
        type="checkbox" 
        checked={completed}/>
      <label>{text}</label>
      <button className="destroy" 
              onClick={deleteTodo}></button> 
    </div>
  </li> 
);

export default Todo;
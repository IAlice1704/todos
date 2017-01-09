import React from 'react';

const Todo = ({ onClick, completed, text }) => ( 
  <li className={ completed ? 'completed' : '' } >
    <div className="view">
      <input 
        onClick={ onClick }
        className="toggle" 
        type="checkbox" 
        checked={completed}/>
      <label>{text}</label>
    </div>
  </li> 
);

export default Todo;
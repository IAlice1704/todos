import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({dispatch}) => {
  const keyUpHandler = (evt) => {
    const ENTER = 13
    if (evt.which === ENTER && input.value) {
      // hit enter, create new item if field isn't empty
      dispatch(addTodo(input.value))
      input.value = ''
    } 
  }
  let input;
  return (
    <header className="header">
      <h1>todos</h1>
      <input 
        autoFocus
        className="new-todo" 
        placeholder="What needs to be done?" 
        ref={node=>{input=node;}}
        onKeyDown={keyUpHandler}
      /> 
    </header>  
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo

import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => ( 
  <section className="main">
    <input className="toggle-all" type="checkbox" />
    <ul className="todo-list"> 
      {
        todos.map( todo =>
        <Todo 
          key={todo.id}
          onClick={() => onTodoClick(todo.id)}
          {...todo} 
        />)
      } 
    </ul>
  </section>
)

export default TodoList


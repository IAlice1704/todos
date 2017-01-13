import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';
import TodoList from '../components/TodoList';
import {bindActionCreators} from 'redux';


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
}


  const mapStateToProps = (state) => ({
    todos: getVisibleTodos( state.todosReducer, 
    state.visibilityFilterReducer.filter )
  });

  const mapDispatchToProps = (dispatch) => 
    bindActionCreators({
      onTodoClick: toggleTodo,
      deleteTodo
    }, dispatch);    


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

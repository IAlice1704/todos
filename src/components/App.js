import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <section className="todoapp">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </section>
);

export default App

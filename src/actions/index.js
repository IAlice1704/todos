import { v4 } from 'node-uuid';
import { createAction } from 'redux-actions';

export const addTodo = createAction(
  'ADD_TODO',
  (text) => ({id: v4(), text}),
);

export const setVisibilityFilter = createAction(
 'SET_VISIBILITY_FILTER',
  (filter) => ({filter}),
 );

export const toggleTodo = createAction(
  'TOGGLE_TODO',
  (id) => ({id}),
);

export const deleteTodo = createAction(
	'DELETE_TODO',
	(id) => ({id}),
);

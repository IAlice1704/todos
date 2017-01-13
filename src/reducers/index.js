import { combineReducers } from 'redux';
import {handleActions} from 'redux-actions';
import todosReducer from './todosReducer';
import visibilityFilterReducer from './visibilityFilterReducer';

const todoApp = combineReducers({
  todosReducer,
  visibilityFilterReducer
})

export default todoApp

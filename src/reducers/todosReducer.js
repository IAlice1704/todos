import {handleActions} from 'redux-actions';

  const initialState = [];

const todosReducer =  handleActions({
    ADD_TODO : (state, action) => [...state, 
    {
      id: action.payload.id, 
      completed: false,
      text: action.payload.text,
    }],
    TOGGLE_TODO : (state, action) => 
        state.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          } else {
            return todo;
          }
        }),
    DELETE_TODO : (state, action) =>
      state.filter(todo =>
        todo.id !== action.payload.id)
}, initialState);


export default todosReducer

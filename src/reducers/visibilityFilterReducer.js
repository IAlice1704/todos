import {handleActions} from 'redux-actions';

const initialState = {
	filter: 'SHOW_ALL',
}

const visibilityFilterReducer = handleActions({
     SET_VISIBILITY_FILTER : (state, action) => ({
     filter: action.payload.filter,
  }),
}, initialState);

export default visibilityFilterReducer

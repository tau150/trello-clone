import { combineReducers } from 'redux';

const taskList = (state = [], action) => {
  switch(action.type) {
  	default:
      return state;
  }
};

const task = (state = {}, action) => {
  switch(action.type) {
  	default:
      return state;
  }
};

const reducer = combineReducers({task, taskList});
export default reducer;
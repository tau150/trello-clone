import { combineReducers } from 'redux';


const tareas = (state=[],action)=>{
  switch (action.type) {
    case "agregarTarea":
      return state.concat({tarea:action.tarea})

      break;
    default:

  }
}

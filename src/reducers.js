import { combineReducers } from 'redux';

const listadoTareas = (state=[],action)=>{
  switch (action.type) {
    case "agregarTarea":
      return state.concat({tarea:action.tarea})
      break;
    default:
      return state

  }
}



const reducer = combineReducers({listadoTareas});
export default reducer;

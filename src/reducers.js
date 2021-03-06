import { combineReducers } from 'redux';

const listadoTareas = (state=[],action)=>{
  switch (action.type) {
    case "agregarTarea":
      return state.concat({tarea:action.tarea,id:setId(state)})
      break;
    default:
      return state

  }
}

const setId = (state) => {

return state.reduce((acc,cur)=> {

 return cur.id>acc ? acc=cur.id : acc

 } , 0 )+1

}

const reducer = combineReducers({listadoTareas});
export default reducer;

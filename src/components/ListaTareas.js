import React from 'react';
import { connect } from 'react-redux';
import Tarea from './tarea';




const ListaTareas = (state)=>{

  return(
    {
      state.listadoTareas.map((tarea, index)=>{
        return (
          <Tarea key={index}/>
        )
      })
    }
  )

}


export default connect(state =>state,{})(ListaTareas)
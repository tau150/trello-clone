import React from 'react';
import { connect } from 'react-redux';
import Tarea from './tarea';




const ListaTareas = (state)=>{
  
  return(

    <div>
    {
      state.listadoTareas.map((tarea, index)=>{
        return (
          <Tarea key={index} {...tarea}/>
        )
      })
    }
  </div>
  )

}


export default connect(state =>state,{})(ListaTareas)
import React from 'react';
import { agregarTarea } from '../actions/index';

import { connect } from 'react-redux';






const InputTareas = ({agregarTarea}) =>{


let ingresoTarea=""
const handleSubmit = (ingresoTarea) =>{
agregarTarea(ingresoTarea.value);


console.log(ingresoTarea.value);
}

  return (
    <div className="row task-row">
          <div className="col-md-12 task">
            <div className="row">
              <div className="col-md-11">
                <input type="text"  ref={input=>ingresoTarea=input} className="form-control" id="txtImputTarea" placeholder="Ingrese tarea"/>
              </div>
              <div className="col-md-1">
                <button type="button" onClick={e=>handleSubmit(ingresoTarea)} className="close" aria-label="Agregar"><span aria-hidden="true">+</span></button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default connect(state=>state,{agregarTarea})(InputTareas)

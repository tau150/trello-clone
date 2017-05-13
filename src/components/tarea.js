import React from 'react';
import {connect} from 'react-redux';


const Tarea = (state) =>{

return(
	<div>
  	<p>Titulo Lista</p>
  	<input type="checkbox" id="cbox1" value="first_checkbox" />
  	<button>editar</button>
  	<button>cerrar</button>
	</div>


)

}

export default connect(state=>state,{})(Tarea)

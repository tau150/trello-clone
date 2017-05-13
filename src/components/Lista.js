import React from 'react';
import InputTareas from './InputTareas';
// import ListaTareas from './components/ListaTareas'
import {connect} from 'react-redux';
import ListaTareas from './ListaTareas';



const Lista = () =>{

return(
<div>
  <h2>Titulo Lista</h2>
  <InputTareas/>
  <ListaTareas/>

</div>


)

}

export default Lista;

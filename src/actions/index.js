
export function agregarTarea (tarea){
  console.log("desde la action: ",tarea)
  return dispatch=>{
    dispatch({
      type:"agregarTarea",
      tarea:tarea
    

    });
  };
};

export function obtenerDatos (callback) {
	console.log('voy a entrar a la funcion');
	fetch('http://172.50.0.231:8080/lists')
	.then(function(response) {
  		return response.json();
	})
	.then(response => callback(response));

}

export function eliminarTarea (id){

  return dispatch=>{
    dispatch({
      type:"eliminarTarea",
      id:id
  
    });
  };
};
export function guardarDatos(dato) {
  console.log(" entra", dato)
  return dispatch => {
    dispatch({
      type:'guardarDatos',
      data:dato

    })
  }
}

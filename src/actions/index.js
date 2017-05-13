
export function agregarTarea (tarea){
  console.log("desde la action: ",tarea)
  return dispatch=>{
    dispatch({
      type:"agregarTarea",
      tarea:tarea

    });
  };
};

export function obtenerDatos () {
	console.log('voy a entrar a la funcion');
	fetch('http://172.50.0.231:8080/lists')
	.then(function(response) {
  		return response;
	})
	.then(function(response) {
		console.log(response);
  		return response;
	});

}
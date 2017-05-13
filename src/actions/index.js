
export function agregarTarea (tarea){
  console.log("desde la action: ",tarea)
  return dispatch=>{
    dispatch({
      type:"agregarTarea",
      tarea:tarea
    

    });
  };
};


export function eliminarTarea (id){

  return dispatch=>{
    dispatch({
      type:"eliminarTarea",
      id:id
  
    });
  };
};
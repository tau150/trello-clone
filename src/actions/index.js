
export function agregarTarea (tarea){
  console.log("desde la action: ",tarea)
  return dispatch=>{
    dispatch({
      type:"agregarTarea",
      tarea:tarea
    

    });
  };
};

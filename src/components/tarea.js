import React from 'react';
import {connect} from 'react-redux';


const Tarea = (state) =>{

const handleEdit = ()=>{

}

const handleDelete = ()=>{
	
}


return(
<div className="col-md-12 task">
            <div className="row">
              <div className="col-md-1">
                <input type="checkbox"/>
              </div>
              <div className="col-md-9">
                <p>La tareaasdsadsadsadsa asd sa dsa das das d asd asd asdasdsadsadsadsad asdsadsa</p>
              </div>
              <div className="col-md-2">
								<button>E</button>
								<button>X</button>
              </div>
            </div>
          </div>
)

}

export default connect(state=>state,{})(Tarea)

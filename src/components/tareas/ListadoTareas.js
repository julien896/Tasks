import React,{Fragment} from 'react';
import Tarea from './Tarea'

const ListadoTareas = () => {

    const tareas = [
        {nombre:'Nueva Tarea', estado:true},
        {nombre:'Nueva Tarea 2', estado:true}
    ];
    return ( 
        <Fragment> 
             <h2>Proyecto :Listado de las Tareas</h2>

             <ul className="listado-tareas"> 
             {tareas.length === 0 
             ? ( <li className="tareas"> <p>No hay tareas </p> </li>)
             : tareas.map(tarea => (
                 <Tarea
                 tarea={tarea}
                 />
             ))
            }
            <button 
            type="button"
            className="btn btn-eliminar">
            Eliminar Proyecto &times;</button>    
             </ul>
        </Fragment>
     );
}
 
export default ListadoTareas;
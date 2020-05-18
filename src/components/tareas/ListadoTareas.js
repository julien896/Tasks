import React,{Fragment, useContext} from 'react';
import Tarea from './Tarea'
import proyectoContext from '../../context/proyecto/proyectoContext'

const ListadoTareas = () => {
    
    const proyectosContext = useContext(proyectoContext);
    const {proyecto, eliminarProyecto} = proyectosContext;

//si no hay proyectos seleccionados
if(!proyecto) return <h2>Seleccionar un Proyecto</h2>   

//array destructuring para extraer proyecto actual    
const [proyectoActual] = proyecto;
    
const tareasProyecto = [
        {nombre:'Nueva Tarea', estado:true},
        {nombre:'Nueva Tarea 2', estado:true}
    ];

    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    }

    return ( 
        <Fragment> 
             <h2>Proyecto : Tienda Virtual</h2>

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
            className="btn btn-eliminar"
            onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>    
             </ul>
        </Fragment>
     );
}
 
export default ListadoTareas;
import React,{useContext} from 'react';
import proyectoContext from '../../context/proyecto/proyectoContext'

const Proyecto = ({proyecto}) => {
    //obtener state de proyecto
const proyectosContext = useContext(proyectoContext);
const {proyectoActual} = proyectosContext;
    
    return ( 
        <li>
            <button
            type="button"
            className="btn btn-blank"
            onClick = {() => proyectoActual(proyecto) }
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;

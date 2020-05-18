import React,{useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyecto/proyectoContext'

const ListadoProyectos = () => {


    //extraer proyectos del state inicial  
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;  

    useEffect(() => {
        obtenerProyectos();
    }, [])

    if(proyectos.length === 0) return (null);

    return ( 
    <ul className="listado-proyectos">
        {proyectos.map(proyecto => (
            <Proyecto
            key={proyectos.id}
            proyecto={proyecto}
            />
))}

    </ul>
     );
}
 
export default ListadoProyectos;
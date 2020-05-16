import React,{Fragment, useState, useContext} from 'react';
import proyectoContext from '../../context/proyecto/proyectoContext'

const NuevoProyecto = () => {

const proyectosContext = useContext(proyectoContext);
const {formulario, mostrarFormulario} = proyectosContext;    

const [proyecto, setProyecto] = useState({
    nombre:""
});

const onChangeProyecto = e => {
    setProyecto({
        ...proyecto,
        [e.target.name]:e.target.value
    })
};

const onSubmitProyecto = e => {
    e.preventDefault();
}

const onClickFormulario = () => {
    mostrarFormulario();
}
    return ( 
        <Fragment>
            <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={onClickFormulario }
            >
            Nuevo Proyecto</button>

            {formulario ?
            (<form
                className="formulario-nuevo-proyecto"
                >
                    <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    onChange={onChangeProyecto}
                    value={proyecto.nombre}
                    />
                    <input
                    type="submit"
                    className="btn btn-block btn-primario"
                    value="Agregar Proyecto"
                    onSubmit={onSubmitProyecto}
                    />
    
                </form>

            )
            : null

            }
        </Fragment>
     );
}
 
export default NuevoProyecto;
import React,{useState} from 'react';
import { Link } from 'react-router-dom';



const NuevaCuenta = () => {


//state del login    
const [usuario,setUsuario] = useState({
    nombre:"",
    email:"",
    password:"",
    confirmar:""
});

//
const onChange = e => {
    setUsuario({
    ...usuario,
    [e.target.name]:e.target.value
    })
}

const onSubmit = e => {
    e.preventDefault();
}

  
    return ( 
<div className="form-usuario">
    <div className="contenedor-form sombra-dark">
        <h1> Crear Nueva Cuenta </h1>

    <form
    onSubmit={onSubmit}
    >
        <div className="campo-form">
            <label htmlFor="nombre">Nombre </label>
                <input
                type="email"
                id="nombre"
                name="nombre"
                placeholder="Ingresa tu nombre"
                value={usuario.nombre}
                onChange={onChange}
                />
        </div>
        <div className="campo-form">
            <label htmlFor="email">E-mail </label>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="Tu Email"
                value={usuario.email}
                onChange={onChange}
                />
        </div>

        <div className="campo-form">
            <label htmlFor="password">Password </label>
                <input
                type="password"
                id="password"
                name="password"
                placeholder="Tu Contraseña"
                value={usuario.password}
                onChange={onChange}
                />
        </div>
        <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password </label>
                <input
                type="confirmar"
                id="password"
                name="password"
                placeholder="Repite tu Password"
                value={usuario.confirmar}
                onChange={onChange}
                />
        </div>
        <div className="campo-form">
            
                <input
                type="submit"
                className="btn-primary btn-block"
                value="Iniciar Sesion"
                />
        </div>
    </form>
    <Link to={'/'} className="enlace-cuenta">
        Volver a Iniciar Sesion.
    </Link>
    </div>

</div>
     );
}

export default NuevaCuenta;
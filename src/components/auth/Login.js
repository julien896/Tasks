import React,{useState} from 'react';
import { Link } from 'react-router-dom';



const Login = () => {


//state del login    
const [usuario,setUsuario] = useState({
    email:"",
    password:""
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
        <h1> Iniciar Sesion </h1>

    <form
    onSubmit={onSubmit}
    >
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
            
                <input
                type="submit"
                className="btn-primary btn-block"
                value="Iniciar Sesion"
                />
        </div>
    </form>
    <Link to={'./nueva-cuenta'} className="enlace-cuenta">
        Obtener Cuenta
    </Link>
    </div>

</div>
     );
}

export default Login;
import React from 'react';
import { MyContext } from '../myContext';
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usr: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // Para hacer esto:
        //   1. El 'name' de los inputs debe ser igual al del 'props.state' que modifican
        //   2. Si los elementos del form son de diferente tipo (input, checkbox, etc.) hay que adecuarla
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(startSession,event) { // Cuando se envíen parámetros al handler es importante cachar el evente hasta el final
        // Validar que exista y cambiar variables del contexto
        event.preventDefault();
        fetch('http://localhost:3001/login/?user=' + event.target.usr.value + '&pass=' + event.target.pss.value)
        .then(x => x.json())
        .then(x => {
            if (x.username === event.target.usr.value) {  
                startSession(event.target.usr.value)
            } else {
                alert('Voz clave incorrecto')
            }
        })
    }

    render() {
        return ( 
            <MyContext.Consumer>
                {({user, isLoggedIn, startSession}) => (
                    <div className='container-fluid login'>
                        <p>User: {user}</p>
                        <p>Is Logged In: {isLoggedIn.toString()}</p>
                        <form className='container' onSubmit={this.handleSubmit.bind(this,startSession)}>  {/**Importante!! El event es el ÚLTIMO argumento (cacharlo en el handler al final), pero no es necesario enviarlo explícitamente */}
                            <div className='mb-3 row'>
                                <label className='col-sm-3 col-form-label'>Usuario</label>
                                <div className='col-sm-8'>
                                    <input className='col-sm-10 form-control' name='usr' value={this.props.usr} onChange={this.handleChange} placeholder={this.context.user}></input>
                                </div>
                            </div>
                            <div className='mb-3 row'>
                                <label className='col-sm-3 form-label'>Contraseña</label>
                                <div className='col-sm-8'>
                                    <input className='col-sm-10 form-control' name='pss' type='password' value={this.props.pss} onChange={this.handleChange}></input>
                                </div>
                            </div>
                            <div className='mb-3 row'>
                                <div className='col-sm-7'>
                                    <button className='btn btn-light' type='submit'>Entrar como invitado</button>
                                </div>
                                <div className='col-sm-5'>
                                    <button className='btn btn-primary' >Iniciar sesión</button> {/**onClick={() => startSession('valor manual')} */}
                                </div>
                            </div>
                        </form>
                    </div>
                )}
            </MyContext.Consumer>
        );
    }
}

// Suscribimos la clase Main al contexto para poder leer sus variables y saber si hay usuario loggeado
// Importante ligar la clase al contexto abajo de la clase, para evitar el error de que no s ha inicializado el contexto o un pedo así
Login.contextType = MyContext

export default Login;
import React from 'react';
import './Login.css'

import firebase from "firebase/app";
import "firebase/auth";

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

    handleSubmit(e) {
    }

    render() {
        return ( 
            <div className='container-fluid login'>
                <form className='container' onSubmit={this.handleSubmit}>  {/**Importante!! El event es el ÚLTIMO argumento (cacharlo en el handler al final), pero no es necesario enviarlo explícitamente */}
                    <div className='mb-3 row'>
                        <label className='col-sm-3 col-form-label'>Usuario</label>
                        <div className='col-sm-8'>
                            <input className='col-sm-10 form-control' name='usr' value={this.props.usr} onChange={this.handleChange}></input>
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
                    <div className='mb-3 row'>
                        <div className='col-sm'>
                            <button className='btn btn-secondary' 
                            onClick={() => {
                                const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                                firebase.auth().signInWithPopup(googleAuthProvider);
                            }}
                            >Login Google</button>
                        </div>
                        <div className='col-sm'>
                            <button className='btn btn-secondary'>Login Github</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }    
}

export default Login;
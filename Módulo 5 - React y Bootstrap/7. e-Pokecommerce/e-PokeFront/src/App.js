import './App.css';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import fetch from 'node-fetch';
import React from 'react';
import { MyContext } from './myContext';

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      contextValues: {
        user: 'guestMain',
        isLoggedIn: false,
        startSession: this.startSession  
      }
    };
  }
  // Función que cambia el estado del "Is Logged In"
  startSession = (user) => {
    this.setState( { 
      contextValues: {
        user: user,
        isLoggedIn: true 
      }
    })
  }
  
  componentDidMount() {
    fetch('http://localhost:3001/session/?user=' + this.context.user)
    .then(x => x.json())
    .then(x => {
      this.setState({  // Definir que el componente cambió correctamente
        isLoaded: true
      })
      if (x.username === this.context.user && x.session) {  // Si el usuario existe y está en sesión registra en el estado que está loggeado
        this.setState({
          isLoggedIn: true
        })
      } else {
        this.setState({
          user: null,
          isLoggedIn: false
        })
      }
    },
    error => {
      this.setState({
        isLoaded: true,
        error: error
      })
    })
  }
  render() {
    if (!this.state.isLoaded) {
      return <div className='container-fluid loadingScreen'></div>
    } else {
      return ( // Para que todos los hijos de Home y Login vean el contexto, hay que envolverlos en el Provider
        <MyContext.Provider value={this.state.contextValues}>  {/**Hay que enviar (y cachar desde el consumer) los parámetros igual que están definidos en el context */}
          {this.state.contextValues.isLoggedIn ? <Home/> : <Login/>}
        </MyContext.Provider>  
      )
    }
  }
}

// Suscribimos la clase Main al contexto para poder leer sus variables y saber si hay usuario loggeado
Main.contextType = MyContext

function App () {
  return (
    <div>
      <Main/> {/**Inicializamos el último usuario que intentó entrar*/}
      <Footer/>
    </div>
  );
}

export default App;

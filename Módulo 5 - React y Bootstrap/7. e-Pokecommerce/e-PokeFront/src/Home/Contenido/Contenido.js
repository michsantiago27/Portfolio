import React from 'react';
import './Contenido.css';
const fetch = require("node-fetch"); // // 1) Para cada proyecto hay que instalar el paquete con 'npm install node-fetch' (para cada proyecto) e importar fetch

class PokeTarjeta extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            // Variables de control del componente
            error: null,
            isLoaded: false,
            // Url del pokemon que se pintará 
            pokeUrl: props.url,
            // Variables del pokemon que se pintarán
            pokeNombre: props.nombre,
            pokeNumero: null,
            pokeTipo: null,
            pokeImagen: null,
            pokeDetalle: null,
        }
    }
    componentDidMount(){
        fetch(this.state.pokeUrl)
        .then(x=>x.json())
        .then(x=> {
            this.setState({
                isLoaded: true,
                pokeNumero: x.id,
                pokeTipo: x.types[0].type.name,
                pokeImagen: x.sprites.front_default,
            });
        },
        error => {
            this.setState({
                isLoaded: true,
                error
            })
        })  
    }
    render() {
        if (this.state.error) {
            return(
                <div>Error en carga de componentes</div>
            );
        }
        else if(!this.state.isLoaded){
            return (
                <div className='col g-2'>
                    <div className='card tarjeta'>
                        <div className='cargandoTarjeta'>
                            <img src='./pokeball-loading' alt=''></img>
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div className='col g-2'>
                    <div className='card tarjeta'>
                        <div className='card-body'>
                            <h5 className='card-title-left tarjetaTitulo'>
                                <div>{this.state.pokeNombre}</div>
                                <div className='text-muted'>#{this.state.pokeNumero}</div>
                            </h5>
                            <p className='card-subtitle text-muted'>{this.state.pokeTipo}</p>
                        </div>
                        <img className='card-image-middle' src={this.state.pokeImagen} alt='no alternative bitch' />
                        <div className='card-body tarjetaBotones'>
                            <button className="btn btn-dark btn-sm">Ver más</button>
                            <button className="btn btn-light btn-sm">Agregar</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

class Contenido extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            pokeTarjetas: null
        };
    }
    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(x=>x.json())
        .then(x=>{
            var pokeObjs = [];
            x.results.forEach((poke,index)=>{
                pokeObjs.push(<PokeTarjeta 
                    key={index}
                    url={poke.url}
                    nombre={poke.name}
                />);
            });
            this.setState({
                isLoaded: true,
                pokeTarjetas: pokeObjs
            });
        },
        error => {
            this.setState({
                isLoaded: true,
                error
            })
        })
    }
    render() {
        if (this.state.error) {
            return (
                <div>Error en cara de pokeGrid</div>
            )
        } else if(!this.state.isLoaded) {
            return (
                <div className='container-fluid contenido'>
                    <img src='./pokeball-loading' alt=''></img>
                </div>
            );
        } else {
            return (
            <div className='container-fluid contenido'>
                <div className='row g-2'>  {/* Se puede usar solo una row y las columnas que se pasen se wrapean a la siguiente fila*/ }
                    {this.state.pokeTarjetas}
                </div>
            </div>
            );
    
        }
    }
}

export default Contenido;
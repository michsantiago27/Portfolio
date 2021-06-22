import React from 'react';
import './Contenido.css';
const fetch = require("node-fetch"); // // 1) Para cada proyecto hay que instalar el paquete con 'npm install node-fetch' (para cada proyecto) e importar fetch

function Tarjeta() {
    return(
        <div className='col g-2'>
            <div className='card tarjeta'>
                <div className='card-body'>
                    <h5 className='card-title-left'>Onix</h5>
                    <p className='card-subtitle text-muted'>Rock</p>
                </div>
                <img className='card-image-top' src='https://picsum.photos/300/200' alt='no alternative bitch' />
                <div className='card-body'>
                    <p className='card-text'>Descripción</p>
                    <div class="d-grid">
                        <div className='row justify-content-between'>
                            <div className='col-auto'>
                                <button class="btn btn-dark btn-sm">Ver más</button>
                            </div>
                            <div className='col-7'>
                                <button class="btn btn-light btn-sm">Agregar a pokedex</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

class Contenido extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pokemon: []};
    }
    
    pintarGrid() {

        fetch('https://pokeapi.co/api/v2/pokemon/raichu')
        .then(response => response.json()) 
        .then((data) => {
            this.setState({pokemon : data.types[0].type.name});
            console.log('1. Tipo de Raichu: ' + data.types[0].type.name);
        })
        .catch(console.log('San querida, hubo un error en el consumo de la API'));

        var pokegrid = this.state.pokemon;
        pokegrid.map(poke => {
            return (
                <Tarjeta 
                    key={poke.toString()}
                />
            );
        })

        return pokegrid;
    }
    
    render() {
        return (
        <div className='container-fluid contenido'>
            <div className='row g-2'>  {/* Se puede usar solo una row y las columnas que se pasen se wrapean a la siguiente fila*/ }
                {this.pintarGrid()}
            </div>
        </div>
        );
    }
}

export default Contenido;
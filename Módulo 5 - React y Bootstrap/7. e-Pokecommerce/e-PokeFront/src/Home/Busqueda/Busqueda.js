import React from 'react';
import './Busqueda.css';

function Filtros() {
    
    return (
        <div className='filtros'></div>
    );
}

function Busqueda() {
    return (
        <div className='container-fluid busqueda'>
            <div className='input-group barra'>
                <input className='form-control' type='search' placeholder='Buscar...'></input>
                <span className='input-group-text border-0 icono-busqueda'></span>
            </div>
            <Filtros/>
        </div>
    );
}

export default Busqueda;
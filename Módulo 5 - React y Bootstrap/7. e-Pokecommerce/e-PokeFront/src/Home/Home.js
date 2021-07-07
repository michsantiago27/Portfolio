import React from 'react';
import Header from './Header/Header';
import Busqueda from './Busqueda/Busqueda';
import Contenido from './Contenido/Contenido';

function Home (props) {
    return (
        <div>
            <Header/>
            <Busqueda/>
            <Contenido/>
        </div>
    );
}

export default Home;
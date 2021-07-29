/**
 * La idea es definir un context aquí, y cambiarlo desde el Nieto (saltándonos al Hijo) para comprobar cómo usar esa mierda que llevo años tratando de entender ptm
 * 
 * 
 * 1. Crear el context y el provider
 *   a. 
 * 2. Setear el provider
 *   a. importar el provider
 *   b. Envolver al componente padre en el provider. (El context lo pueden usar los hijos, pero el padre no. Si lo necesita usar el padre, envolver en el provider desde un componente más arriba)
 * 3. Setear y usar el contexto
 *   a. 
 * 
 * 
 * */

import React from 'react';
import './estilosContext.css';
import Hijo from './Hijo';
import { VarContextProvider } from './VarContext';


export default function SeccionContext () {
    return (
        <VarContextProvider>
            <div className='container-fluid seccionContext'>Sección de Context {/** Trucha, el context se pasa a los children, eso no incluye este mismo componente, por eso aquí no se ve puede mostrar el context*/}
                <Hijo/>
            </div>
        </VarContextProvider>
    ); 
}
import react from 'react';
import SeccionA from './SeccionA/SeccionA';
import SeccionB from './SeccionB/SeccionB';

// (3) Importar componentes que ayudan a routear
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// No topo todavía cómo hacer que los mismos botones que routean cambien al hacer clic. Como un carrusel de páginas...

export default function SeccionRouters () {
    return (
        <div className='container-fluid seccion'>Seccion Routers
            <Router>
                <Link to='/A'>
                    <button className='btn btn-primary'>Sección A</button>
                </Link>
                <Link to='/B'>
                    <button className='btn btn-secondary'>Sección B</button>
                </Link>

                <Switch>
                <Route path='/A'>
                    <SeccionA />
                </Route>
                <Route path='/B' >
                    <SeccionB />
                </Route>
                </Switch>
            </Router>
        </div>
    );
}

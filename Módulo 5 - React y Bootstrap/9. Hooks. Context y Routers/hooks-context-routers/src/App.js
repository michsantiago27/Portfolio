/**
 * La idea es ver todo lo relacionado a los tres temas en los que me atrasé:
 * 1. Hooks
 *    a. State Hooks
 *    b. Effect Hooks
 * 2. Context
 * 3. Routers
 * 
 * No exactamente en ese orden, pero intentar hacer una app que te redirija a páginas diferentes con los routers, mostrando uso de effect y state hooks, y lectura y escritura de variables de context
 * Es un poco un cagadero pero a ver que pedo. Usaré el (1), (2) y (3) para ver todo lo que impacta en cada tema
 * 
 * Notas importantes de cada tema
 * --- Routers --- 
 * - Correr comando: npm install react-router-dom
 * 
 * --- Hooks ---
 * 
 * 
 * --- Context --- 
 * 
 * 
 */

import './App.css';
import SeccionRouters from './SeccionRouters/SeccionRouters'
import SeccionStateHooks from './SeccionStateHooks/SeccionStateHooks';
import SeccionEffectHooks from './SeccionEffectHooks/SeccionEffectHooks';
import SeccionContext from './SeccionContext/SeccionContext';

function App() {
  return (
    <div className='container-fluid App'>
        <SeccionRouters />
        <SeccionStateHooks />
        <SeccionEffectHooks />
        <SeccionContext />
    </div>

  );
}

export default App;

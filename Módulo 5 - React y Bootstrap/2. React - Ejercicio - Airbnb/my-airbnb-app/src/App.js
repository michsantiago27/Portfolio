/**
 *  Replicar la página: https://www.airbnb.mx/a/stays/?af=43720035&c=.pi0.pk51803035407_386522774567_c_297438457165&sem_position=&sem_target=kwd-297438457165&location_of_interest=&location_physical=20709&ghost=true&gclid=Cj0KCQjwktKFBhCkARIsAJeDT0joYeO7hIBliO7CZXYjWCQGSfdCqzTY9RzE3MjhG5Szu1cqjchKA3MaAo8rEALw_wcB
 * 
 */
import './App.css';   // Hoja de estilos
// Crear componentes en su propia carpeta e importarlos
import Seccion1 from './seccion-1/seccion-1';

function App() {

  return (
    <Seccion1 />
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;

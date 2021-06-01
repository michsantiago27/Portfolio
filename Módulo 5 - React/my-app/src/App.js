import logo from './logo.svg';
import './App.css';

import Header from './ComponenteNuevo/Header';                                // Así se incorporan componentes

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>                                                             {/* Así se usa el componente importado */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

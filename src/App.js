import React from 'react';
import './App.css';
const fetch = require("node-fetch"); //1) Para cada proyecto hay que instalar el paquete con 'npm install node-fetch' (para cada proyecto) e importar fetch

const altImg = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dfcdfd71-cdc6-49be-94fd-5acc7e762b41/dc263y3-ec9de655-ff40-4581-b233-f136405be255.png/v1/fill/w_256,h_256,strp/000___open_pokeball_by_ebanotatsumasa_dc263y3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvZGZjZGZkNzEtY2RjNi00OWJlLTk0ZmQtNWFjYzdlNzYyYjQxXC9kYzI2M3kzLWVjOWRlNjU1LWZmNDAtNDU4MS1iMjMzLWYxMzY0MDViZTI1NS5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ThU18CDmlEJEsMrSus6KDv3f5BHQJHipxSaxOyhL_hs';

class PokeImg extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      error: null, // variable para saber si el fetch regresó error
      isLoaded: false,  // variable para saber si no ha cargado y poder mostrar un "loading..."
      pokeImagen : null,
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/raichu')
    .then(x => x.json())
    .then(x => {
      this.setState({
        isLoaded: true,   
        pokeImagen: x.sprites.front_default
      });
    },
    error => {  // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components. (https://reactjs.org/docs/faq-ajax.html)
      this.setState({
        isLoaded: true,
        error
      })
    })
  }
  
  render() {
    const {error, isLoaded, pokeImagen} = this.state;
    if(error) {
      return <div>Error</div>
    } else if (!isLoaded) {
      return <img src='https://koisuruhi.carrd.co/assets/images/image03.gif?vc4648145d' alt={altImg}/>
    } else {
    return <img src={pokeImagen} alt={altImg}/>
    }
  }
}

class PokeImgUrl extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      error: null, 
      isLoaded: false,
      pokeUrl: props.url,
      imagen: null
    } 
  }

  componentDidMount() {
    fetch(this.state.pokeUrl)
    .then(x => x.json())
    .then(x => {
      this.setState({
        imagen: x.sprites.front_default
      })
    });  
  }
  render() {
    return (
      <img src={this.state.imagen} alt={altImg}/>
    );
  }
}

class PokeGrid extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null, 
      isLoaded: false,
      pokemones: null
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=451')
    .then(x => x.json())
    .then(x => {
      const pokes = [];  // Crear variable donde se guardarán todas las url de los pokemon que se pintarán
      x.results.map((poke,index) => {  // Guardar todas las url en la variable
        pokes.push(<PokeImgUrl 
          key={index}
          url={poke.url}
          imagen={null}
          />);
      });
      this.setState({
        isLoaded: true,
        pokemones: pokes
      });
    },
    error => {
      this.setState({
        isLoaded: true,
        error
      });
    })
  }

  render () {
    const {error, isLoaded, pokemones} = this.state;
    if(error) {
      return <div>Error</div>
    } else if (!isLoaded) {
      return <div>Not Loaded</div>
    } else {
      return <div>{pokemones}</div>
    }
    
    return (
      <div>{this.state.pokemones}</div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PokeImg/>    {/**Extrayendo uno solo */}
        <br/>
        <PokeGrid/>   {/**Extrayendo varios */}
      </div>
    );
  }
}

export default App;

import React from 'react';
import './top.css';

class Portada extends React.Component {
    constructor (props) {    // En el constructor definimos el estado inicial del componente
        super(props);
        this.state = { fondo: 'https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg'};
    }
    
    tick() {                // Cambiamos el estado en el orden en el que se cambiarán las imágenes
        switch (this.state.fondo) {
        case 'https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg':
            this.setState({  fondo: 'https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg' });  // Funciona sin usar función flecha. Tal vez tenga un propósito hacer con función flecha más adelante
            break;
        case 'https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg':
            this.setState(() => ({
                fondo: 'https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg'
            }))
            break;
        case 'https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg':
            this.setState(() => ({
                fondo: 'https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg'
            }))
            break;
        case 'https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg':
            this.setState(() => ({
                fondo: 'https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg'
            }))
            break;
        case 'https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg':
            this.setState(() => ({
                fondo: 'https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg'
            }))
            break;     
        }
    }

    componentDidMount() {                 // Crear intervalos de cambio que ejecuten la función 'tick'. setInterval() es función predefinida de javascript o react. No sé bien
        this.interval = setInterval(() => this.tick(), 5000);
    }

    componentWillUnmount() {   // No sé para qué es esta función
        clearInterval(this.interval);
    }
    
    render() {
        return (
            <img className='imagenIphone'
                src={this.state.fondo}>
            </img>
        );
    }
}


class Top extends React.Component {
    cambiarPortada() {  
        return (
            <Portada />
        );
    }

    render() {
        return (
            <div className='divTop'>
                <div className='divContTop'>
                    <div className='divIphones'>
                        {this.cambiarPortada()}  {/*Intento para cambiar portada con estados */}
                    </div>
                    <div className='divLogin'>
                        <img className='divIg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'/>
                        <img className='divProfilePic' src='https://picsum.photos/100/100'/>
                        <button className='btn btn-primary'>Continuar como michsantiago27</button>
                        <div className='divAjustes'>
                            <div>¿No eres michsantiago27?</div>
                            <a className='cambiarCuenta'>Cambiar de cuenta</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Top;
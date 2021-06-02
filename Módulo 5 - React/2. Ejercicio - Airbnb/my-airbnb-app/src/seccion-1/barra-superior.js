function Boton(props) {
    return(
        <button className={props.className}>{props.value}</button>
    )
}

function Menu() {
    return (
        <div className='s1Menu'>
            <Boton 
                className={'s1MenuBotonBlanco'}
                value={'Conviértete en anfitrión'}
                />
            <Boton 
                className={'s1MenuBoton'}
                value={'Ayuda'}/>
            <Boton 
                className={'s1MenuBoton'}
                value={'Regístrate'}/>
            <Boton
                className={'s1MenuBoton'}
                value={'Iniciar sesión'}/>
        </div>
    )
}

function MainLogo() {
    return (
        <div className='s1Logo'>
            <div className='s1Icono'></div>
            <div className='s1Marca'>airbnb</div>
        </div>
    )
}

function BarraSuperior() {
    return (
        <div className='s1BS'>
            <MainLogo />
            <Menu />
        </div>
    )
}

export default BarraSuperior;
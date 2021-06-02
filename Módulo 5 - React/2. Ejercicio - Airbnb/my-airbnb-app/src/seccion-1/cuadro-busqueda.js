function FormBuscador (props) {
    return (
        <form>
            <input 
                defaultValue='Cerca de aquí'
                className='ubicacionBuscador'
                type='text'/>
            <input 
                placeholder='Agrega la fecha'
                className='llegadaBuscador'
                type='text'/>
            <input
                placeholder='Agrega la fecha'
                className='salidaBuscador'
                type='text'/>
            <input  
                defaultValue='2'
                className='adultosBuscador'
                type='text'/>
            <input  
                defaultValue='0'
                className='niñosBuscador'
                type='text'/>
            <input  
                defaultValue='Buscar'
                className='botonBuscador'
                type='button'/>
        </form>
    )
}

function TextosBuscador(props) {
    return (
        <div className={props.className}>{props.value}</div>
    )
}


function CuadroBusqueda() {
    return (
        <div className='s1CB'>
            <TextosBuscador 
                value={'Busca alojamientos en Airbnb'}
                className={'tituloBuscador'}/>
            <TextosBuscador 
                value={'Descubre alojamientos enteros y habitaciones privadas, perfectos para cualquier viaje.'}
                className={'descripcionBuscador'}/>
            <FormBuscador/>
        </div>
    )
}

export default CuadroBusqueda;
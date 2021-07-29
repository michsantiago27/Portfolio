import React, {useEffect, useState} from "react";

// Trucha que cambia el import {useEffect}
// Usar como si fuera componentDidMount, componentDidUpdate y componentWillUnmount juntos. Se triggerea solo

export default function SeccionEffectHooks () {
    const [contador, setContador] = useState(50)
    
    useEffect(() => {
        document.title = `${contador}`;
    })

    return (
        <div className='container-fluid seccion'>Sección de Effect Hooks
             <button className='btn btn-primary' onClick={() => setContador(contador+1)}>+1</button> 
        </div>
    ); 
}
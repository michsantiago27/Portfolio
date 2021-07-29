import React, {useState} from "react";

export default function SeccionStateHooks () {
    const [contador, setContador] = useState(0);
    
    return (
        <div className='container-fluid seccion'>Sección de State Hooks
            <button className='btn btn-warning' onClick={() => setContador(contador + 1)}>Incrementar contador</button>
            <button className='btn btn-light' onClick={() => setContador(contador - 1)}>Disminuir contador</button>
            <div>Variable contador: {contador}</div>
        </div>
    ); 
}
import Nieto from "./Nieto";
import React, {useContext} from "react";
import { VarContext } from "./VarContext";

export default function Hijo () {
    const [miVarX, setMiVarX] = useContext(VarContext);
    
    return (
        <div className='hijo'>Hijo - Variable context: {miVarX}
            <Nieto/>
        </div>
    );
}
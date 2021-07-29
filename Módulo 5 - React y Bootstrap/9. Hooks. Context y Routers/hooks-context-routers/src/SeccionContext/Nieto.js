import { useContext } from "react"; // (1)
import { VarContext } from "./VarContext"; // (2)

export default function Nieto () {
    const [miVarY, setMiVarY] = useContext(VarContext) // (3)
    
    return (
        <div className='nieto'>Nieto - Variable context: {miVarY}
            <p/>
            <button className='btn btn-dark' onClick={() => setMiVarY(miVarY + 1)}>Add 1 to context var</button>
        </div>
    );
}
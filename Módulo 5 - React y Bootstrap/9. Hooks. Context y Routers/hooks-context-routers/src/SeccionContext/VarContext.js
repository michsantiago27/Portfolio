import React, {useState, createContext} from 'react';

export const VarContext = createContext();

export const VarContextProvider = props => {
    const [miVar, setMiVar] = useState(8);
    return (
        <VarContext.Provider value={[miVar, setMiVar]}>
            {props.children}
        </VarContext.Provider>
    );
}
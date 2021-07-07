import React from "react"

// Se define el contexto con sus variables y el valor default que se cargará.
// Se debe exportar para que tengan acceso los otros componentes
export const MyContext = React.createContext({
    user: 'Contexto default',
    isLoggedIn: false,
    startSession: () => {}
})
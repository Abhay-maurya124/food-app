import React, { createContext, useReducer } from 'react'

const Cartstatecontext = createContext()
const Cartdispatchcontext = createContext()
const reducer = (state, action) => {
 
}

export const Cartprovider = (children) => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <Cartstatecontext.Provider value={dispatch}>
            <Cartdispatchcontext.Provider value={state}>
                {children}
            </Cartdispatchcontext.Provider>
        </Cartstatecontext.Provider>
    )
}
export const useCart = () => useContext(Cartstatecontext)
export const useDispatchcart = () => useContext(Cartdispatchcontext)

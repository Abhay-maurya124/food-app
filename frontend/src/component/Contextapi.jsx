import React, { createContext, useContext, useReducer } from 'react'

const Cartstatecontext = createContext()
const Cartdispatchcontext = createContext()
const reducer = (state, action) => {

    switch (action.type) {
        case "ADD":
            return [...state, {
                name: action.name,
                id: action.id,
                img: action.img,
                size: action.size,
                qty: action.qty,
                Total: action.FinalPrice,
            }]
        default: console.log(error)

        }
}
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <Cartstatecontext.Provider value={state} >
            <Cartdispatchcontext.Provider value={dispatch}>
                {children}
            </Cartdispatchcontext.Provider>
        </Cartstatecontext.Provider>
    )
}
export const useCart = () => useContext(Cartstatecontext)
export const useDispatchcart = () => useContext(Cartdispatchcontext)

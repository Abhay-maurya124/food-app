import React, { createContext, useContext, useReducer } from "react";

// Contexts
const CartStateContext = createContext();
const CartDispatchContext = createContext();

// Initial state
const initialState = [];

// Reducer
const cartReducer = (state, action) => {
  switch (action.type) {

    case "ADD": {
      const { id, name, size, qty, price, img } = action.payload;

      const existIndex = state.findIndex(
        item => item.id === id && item.size === size
      );

      if (existIndex !== -1) {
        const updated = [...state];
        updated[existIndex].qty += qty;
        updated[existIndex].price += price;
        return updated;
      }

      return [
        ...state,
        { id, name, size, qty, price, img }
      ];
    }

    case "REMOVE":
      return state.filter(
        item => !(item.id === action.payload.id && item.size === action.payload.size)
      );

    case "CLEAR":
      return [];

    default:
      return state;
  }
};

// Provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
          {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

// Hooks
export const useCart = () => useContext(CartStateContext);
export const useDispatchcart = () => useContext(CartDispatchContext);

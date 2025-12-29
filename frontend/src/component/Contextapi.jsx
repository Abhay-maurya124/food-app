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

      //       if (existIndex !== -1) {
      //     const updated = [...state]; // Copy the array
      //     updated[existIndex].qty += qty; // Add new quantity to old quantity
      //     updated[existIndex].price += price; // Add new price to old price
      //     return updated;
      // }

      if (existIndex !== -1) {
        return state.map((item, index) => {
          if (index === existIndex) {
            return {
              ...item,
              qty: item.qty + qty,
              price: item.price + price,
            };
          }
          // 3. Return the original object for items that didn't change
          return item;
        });
      }

      return [...state, { id, name, size, qty, price, img }];
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

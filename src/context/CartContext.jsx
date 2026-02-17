// src/context/CartContext.jsx
import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.find(item => item.name === action.payload.name);
      if (existing) {
        return state.map(item =>
          item.name === action.payload.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case 'INCREMENT': {
      return state.map(item =>
        item.name === action.payload.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    case 'DECREMENT': {
      return state.map(item =>
        item.name === action.payload.name && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0); // remove if qty reaches 0
    }
    case 'REMOVE': {
      return state.filter(item => item.name !== action.payload.name);
    }
    case 'CLEAR': {
      return [];
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => dispatch({ type: 'ADD_TO_CART', payload: product });
  const increment = (name) => dispatch({ type: 'INCREMENT', payload: { name } });
  const decrement = (name) => dispatch({ type: 'DECREMENT', payload: { name } });
  const removeFromCart = (name) => dispatch({ type: 'REMOVE', payload: { name } });
  const clearCart = () => dispatch({ type: 'CLEAR' });

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, increment, decrement, removeFromCart, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
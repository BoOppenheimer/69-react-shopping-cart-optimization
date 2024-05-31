import { createContext, useContext, useState } from 'react';

// Create the context
const CartContext = createContext();

// Custom hook to use the Cart context
export const useCart = () => useContext(CartContext);

// Cart provider to wrap the application or the list
export const CartProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState({});

  const addItemToCart = (item) => {
    setSelectedItems((prevItems) => ({
      ...prevItems,
      [item.id]: item,
    }));
  };

  const removeItemFromCart = (id) => {
    setSelectedItems((prevItems) => {
      const { [id]: _, ...rest } = prevItems;
      return rest;
    });
  };

  return (
    <CartContext.Provider value={{ selectedItems, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
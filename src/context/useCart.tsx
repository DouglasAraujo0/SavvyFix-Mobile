import React, { createContext, useContext, useState } from 'react';

// Defina o contexto CartContext
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 } // Ajuste para 'quantity'
                        : cartItem
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }]; // Ajuste para 'quantity'
            }
        });
    };

    const removeFromCart = (item) => {
        setCartItems(prevItems => prevItems.filter(cartItem => cartItem.id !== item.id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Exporte o contexto para ser utilizado
export const useCart = () => {
    return useContext(CartContext);
};

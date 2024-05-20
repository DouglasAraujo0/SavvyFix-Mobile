import React, { createContext, useContext, useState } from 'react';

// Defina o contexto CartContext
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0); // Adicionando o estado para a contagem total de itens no carrinho

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
        setCartCount(prevCount => prevCount + 1); // Incrementa a contagem total de itens no carrinho
    };

    const removeFromCart = (item) => {
        setCartItems(prevItems => prevItems.filter(cartItem => cartItem.id !== item.id));
        setCartCount(prevCount => prevCount - item.quantity); // Decrementa a contagem total de itens no carrinho
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};

// Exporte o contexto para ser utilizado
export const useCart = () => {
    return useContext(CartContext);
};

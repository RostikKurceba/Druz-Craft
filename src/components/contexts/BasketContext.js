import React, { createContext, useContext, useState } from 'react';

const BasketContext = createContext();

export const useBasket = () => {
    return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);

    const addToBasket = (product) => {
        setBasket((prevBasket) => [...prevBasket, product]);
    };

    const removeFromBasket = (productId) => {
        setBasket((prevBasket) => prevBasket.filter(product => product.id !== productId));
    };

    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
            {children}
        </BasketContext.Provider>
    );
};

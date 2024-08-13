import { createContext, useEffect, useState } from "react";

import React from 'react'

import { items_list } from '../assets/assets'

export const itemsContext = createContext(null);

const StoreContext = ({ children }) => {

    const [cartItems, setCartItems] = useState({})
    const [items, setItems] = useState([])

    const removeFromCart = (id) => {
        setCartItems(prevCartItems => {
            const filteredItems = Object.fromEntries(
                Object.entries(prevCartItems).filter(([key, value]) => key !== id)
            );
            return { ...filteredItems };
        });
    }
    const addToCart = (id, quantity) => {
        setCartItems(prevCartItems => {
            if (!prevCartItems[id]) {
                return { ...prevCartItems, [id]: 1 };
            } else {
                if (quantity !== 0) {
                    return { ...prevCartItems, [id]: quantity ? quantity : 1 };
                } else {
                    const filteredItems = Object.fromEntries(
                        Object.entries(prevCartItems).filter(([key, value]) => value !== 0)
                    );
                    return { ...filteredItems };
                }
            }
        });
    };
    useEffect(() => {

    }, [])
    const contextValue = {
        items_list,
        cartItems,
        addToCart,
        removeFromCart,
        items,
        setItems
    }

    return (
        <itemsContext.Provider value={contextValue}>
            {children}
        </itemsContext.Provider>
    )
}

export default StoreContext

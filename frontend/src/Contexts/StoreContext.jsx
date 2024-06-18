import { createContext, useEffect, useState } from "react";

import React from 'react'

import { items_list } from '../assets/assets'

export const itemsContext = createContext(null);

const StoreContext = ({ children }) => {
    console.log('cpntect rerender');
    const [cartItems, setCartItems] = useState({})

    // const addToCart = (id, quantity) => {
    //     if (!cartItems[id]) {
    //         setCartItems({ ...cartItems, [id]: 1 })
    //     }
    //     else {
    //         if (quantity !== 0) {
    //             setCartItems({ ...cartItems, [id]: (quantity) ? quantity : 1 })
    //         }
    //         else {
    //             setCartItems({
    //                 ...Object.fromEntries(Object.entries(cartItems).filter(([key, value]) => value !== 0))
    //             })
    //         }
    //     }
    // }

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

    const contextValue = {
        items_list,
        cartItems,
        addToCart
    }

    return (
        <itemsContext.Provider value={contextValue}>
            {children}
        </itemsContext.Provider>
    )
}

export default StoreContext

import { createContext, useEffect, useState } from "react";

import React from 'react'

import { items_list } from '../assets/assets'

export const itemsContext = createContext(null);

const StoreContext = ({ children }) => {

    const [cartItems, setCartItems] = useState({})

    const addToCart = (id) => {
        if (!cartItems[id]) {
            setCartItems({ ...cartItems, [id]: 1 })
        }
        else {
            setCartItems({ ...cartItems, [id]: cartItems[id] + 1 })
        }
    }

    const removeFromCart = (id) => {
        setCartItems({ ...cartItems, [id]: cartItems[id] - 1 })

    }


    const contextValue = {
        items_list,
        cartItems,
        addToCart,
        removeFromCart
    }

    return (
        <itemsContext.Provider value={contextValue}>
            {children}
        </itemsContext.Provider>
    )
}

export default StoreContext

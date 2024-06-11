import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Item.css'
import { FaCartArrowDown } from "react-icons/fa";
import { IoArrowRedoCircle } from "react-icons/io5";
import { itemsContext } from '../../Contexts/StoreContext'

const Item = ({ id, name, image, price, category }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(itemsContext);

    return (
        <div className='item'>
            <div className='item-view'>
                <img className='item-image' src={image}></img>
                <div className='item-info'>
                    <p id='name'>{name}</p>
                    <p id='price'>{price}$</p>
                </div>

                {
                    !cartItems[id]
                        ? <div className='cart-icon-div' onClick={() => { addToCart(id) }}><FaCartArrowDown className='cart-icon' /></div>
                        : <div className='view-cart-icon-div'><IoArrowRedoCircle className='cart-icon' /></div>
                }
            </div>
        </div>
    )
}

export default Item

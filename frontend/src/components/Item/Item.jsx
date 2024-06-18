import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Item.css'
import { FaCartArrowDown } from "react-icons/fa";
import { IoArrowRedoCircle } from "react-icons/io5";
import { MdArrowRightAlt } from "react-icons/md";
import { itemsContext } from '../../Contexts/StoreContext'
const Item = ({ id, name, image, price, category, display }) => {
    const { cartItems, addToCart} = useContext(itemsContext);
    console.log('item rerender');
    return (
        <div id='item' className={display === 'flex' ? 'flex-item' : 'grid-item'}>
            {
                (display === 'flex')
                    ? (
                        <>
                            <div className="item-image">
                                <img src={image}></img>
                            </div>
                            <div className="item-name">
                                <p id='name' className='name'>{name}</p>
                                <p id='price' className='price'>EGP {price}</p>
                            </div>
                        </>
                    )
                    : (
                        <>
                            <div className="item-name">
                                <p id='name'>{name}</p>
                            </div>
                            <div className="item-image">
                                <img src={image}></img>
                            </div>
                        </>
                    )
            }
            <div className="item-cart">
                <p id='price' className='price'>EGP {price}</p>
                {
                    (!cartItems[id] || cartItems[id] === 0)
                        ? <div className='cart-icon-div' onClick={() => { addToCart(id) }}><FaCartArrowDown className='cart-icon' /></div>
                        : <div className='view-cart-icon-div'><IoArrowRedoCircle className='cart-icon' /></div>
                }
            </div>
        </div>
    )
}

export default Item

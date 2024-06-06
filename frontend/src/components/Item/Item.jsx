import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Item.css'

import { itemsContext } from '../../Contexts/StoreContext'

const Item = ({ id, name, image, price, category }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(itemsContext);

    return (
        <div className='item'>
            <div className='itemView'>
                <img className='itemImage' src={image}></img>
                {
                    !cartItems[id]
                        ? <img className='counterChanger' src={assets.add_icon_white} onClick={() => { addToCart(id) }}>

                        </img>
                        : <div className='itemViewCounter'>
                            <img className='add' src={assets.add_icon_green} onClick={() => { addToCart(id) }}></img>
                            <p>{cartItems[id]}</p>
                            <img className='sub' src={assets.remove_icon_red} onClick={() => { removeFromCart(id) }}></img>
                        </div>
                }
            </div>
            <div className='itemInfo'>
                <p id='name'>{name}</p>
                <p id='price'>{price}$</p>
            </div>
        </div>
    )
}

export default Item

import React from 'react'
import { useContext } from 'react'
import { itemsContext } from '../../Contexts/StoreContext'
import './Cart.css'
import { ImCross } from "react-icons/im";
const Cart = () => {
  let { items_list, cartItems, addToCart, removeFromCart } = useContext(itemsContext)
  const handleCounterChange = (event, id) => {
    addToCart(id, event.target.value);
  };
  console.log('cart reload');
  return (
    <div className='cart'>
      <div className="cart-title">
        <p></p>
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>

      {
        Object.entries(cartItems).filter(([id, quantity]) => quantity > 0).map(([id, quantity]) => {
          return (
            <div className="cart-item" key={id}>
              <ImCross className="remove-icon" onClick={() => { removeFromCart(id) }} />
              <div className="item-info">
                <img src={items_list[id - 1].image}></img>
                <p className='item-title'>Product</p>
                <p className='item-name'>{items_list[id - 1].name}</p>
              </div>
              <div className="item-price">
                <p className='item-title'>Price</p>
                <p>EGP {items_list[id - 1].price}</p>
              </div>
              <div className="quantity-counter">
                <p className='item-title'>Quantity</p>
                <input type="number" min='0' className='counter' value={cartItems[id]} onChange={(event) => handleCounterChange(event, id)}></input>
              </div>
              <div className="total-price">
                <p className='item-title'>Subtotal</p>
                <p>EGP {items_list[id - 1].price * cartItems[id]}</p>
              </div>
            </div>
          )
        })
      }


    </div>
  )
}

export default Cart

import React from 'react'
import { useContext } from 'react'
import { itemsContext } from '../../Contexts/StoreContext'
import './Cart.css'
import { ImCross } from "react-icons/im";
const Cart = () => {
  let { items_list, cartItems, addToCart } = useContext(itemsContext)
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
              <ImCross className="remove-icon" />
              <div className="item-info">
                <img src={items_list[id - 1].image}></img>
                <p>{items_list[id - 1].name}</p>
              </div>
              <div className="item-price">
                <p>EGP {items_list[id - 1].price}</p>
              </div>
              <input type="number" min='0' value={cartItems[id]} onChange={(event) => handleCounterChange(event, id)}></input>
              <div className="total-price">
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

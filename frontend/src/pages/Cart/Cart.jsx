import React from 'react'
import { useContext } from 'react'
import { itemsContext } from '../../Contexts/StoreContext'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = () => {
  let { items_list, cartItems, addToCart, removeFromCart, items, setItems } = useContext(itemsContext)
  console.log(items_list);

  let totalPrice = 0;
  const handleCounterChange = (event, id) => {
    addToCart(id, event.target.value);
  };
  return (
    (Object.keys(cartItems).length === 0)
      ?
      <div className='empty-cart'>
        <div className="banner">
          <p>Your cart is currently empty.</p>
        </div>
        <Link to='/' className="return">
          <button>Return to shop</button>
        </Link>
      </div>
      :
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
            const item = items.find((i) => id === i._id)
            totalPrice += (item.price * cartItems[id]);
            
            return (
              <div className="cart-item" key={id}>
                <ImCross className="remove-icon" onClick={() => { removeFromCart(id) }} />
                <div className="item-info">
                  <img src={`http://localhost:5000/images/${item.image}`}></img>
                  <p className='item-title'>Product</p>
                  <p className='item-name'>{item.name}</p>
                </div>
                <div className="item-price">
                  <p className='item-title'>Price</p>
                  <p>EGP {item.price}</p>
                </div>
                <div className="quantity-counter">
                  <p className='item-title'>Quantity</p>
                  <input type="number" min='0' className='counter' value={cartItems[id]} onChange={(event) => handleCounterChange(event, id)}></input>
                </div>
                <div className="total-price">
                  <p className='item-title'>Subtotal</p>
                  <p>EGP {item.price * cartItems[id]}</p>
                </div>
              </div>
            )
          })
        }

        <div className="checkout-info">
          <div className="coupon">
            <input placeholder='Coupon code' type="text"></input>
            <button>Apply Coupon</button>
          </div>
          <div className="checkout">
            <button>Process to checkout</button>
          </div>
          <div className="cart-total">
            <div className="box-title">
              <h2>Cart totals</h2>
            </div>
            <div className="subtotal flex-section">
              <p className='title'>Subtotal</p>
              <p className='price'>EGP {totalPrice}</p>
            </div>
            <div className="shipping">
              <p className='title'>Shipping</p>
              <div className="flat-rate flex-section">
                <p>Flat rate:</p>
                <p>EGP 70</p>
              </div>
              <p>Shipping to Sharkia.</p>
            </div>
            <div className="total flex-section">
              <p className='title'>Total</p>
              <p>{totalPrice}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Cart

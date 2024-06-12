import React from 'react'
import './Header.css'
import { assets, items_list } from '../../assets/assets'
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Header = () => {
  return (
    <div className='header'>
      <div className="cart-items">
        <HiOutlineShoppingBag className='bag-icon'/>
        <p>EGP 950.00</p>
      </div>
      <div className="logo">
        <img src={assets.logo}></img>
        <p>Electronics Store</p>
      </div>
      <div className="search-bar">
        <input placeholder='Search for product'></input>
        <select>
          <option value="">All Categories</option>
          {
            items_list.map((item, index) => {
              return (
                <option value={item} key={item._id}>{item.category}</option>
              )
            })
          }
        </select>
        <button>
          <CiSearch className='search-icon' />
        </button>
      </div>
    </div>
  )
}

export default Header

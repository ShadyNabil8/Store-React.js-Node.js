import React from 'react'
import './Header.css'
import { assets, items_list } from '../../assets/assets'
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiListBold } from "react-icons/pi";
import { GoPerson } from "react-icons/go";

const Header = ({ setSlidingSidebar, slidingSidebar }) => {
  return (
    <>
      <div className='header'>
        <div className="cart-items">
          <HiOutlineShoppingBag className='bag-icon' />
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
      <div className='small-header'>
        <div className='border-div'></div>
        <div className="left-header">
          <PiListBold className='list-icon' onClick={() => { setSlidingSidebar(!slidingSidebar) }} />
          <div className="small-logo">
            <img src={assets.logo}></img>
          </div>
        </div>
        <div className="right-header">
          <CiSearch className='right-icon' />
          <GoPerson className='right-icon' />
          <HiOutlineShoppingBag className='right-icon' />
        </div>
      </div>
    </>

  )
}

export default Header

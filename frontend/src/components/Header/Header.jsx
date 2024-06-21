import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import { assets, items_list } from '../../assets/assets'
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiListBold } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { Link } from 'react-router-dom';
import { itemsContext } from '../../Contexts/StoreContext'

const Header = ({ setSlidingSidebar, slidingSidebar }) => {
  const { cartItems, items_list } = useContext(itemsContext);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`header ${isSticky ? 'invisible' : ''}`}>
        <Link to='/cart' className="cart-items">
          <div>
            <HiOutlineShoppingBag className='bag-icon' />
          </div>
          {
            (Object.keys(cartItems).length !== 0) && (
              <div className="dot">
                {Object.keys(cartItems).length}
              </div>
            )
          }
          <p>EGP 950</p>
        </Link>
        <div className="logo">
          <Link to='/'><img src={assets.logo}></img></Link>
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
      <div className={`small-header ${isSticky ? 'visible' : ''}`}>
        <div className='border-div'></div>
        <div className="left-right-header">
          <div className="left-header">
            <PiListBold className='list-icon' onClick={() => { setSlidingSidebar(!slidingSidebar) }} />
            <Link to='/' className="small-logo">
              <img src={assets.logo}></img>
            </Link>
          </div>
          <div className="right-header">
            <CiSearch className='right-icon' />
            <GoPerson className='right-icon' />
            <Link to='/cart' className="cart-items">
              <HiOutlineShoppingBag className='right-icon' />
              {
                (Object.keys(cartItems).length !== 0) && (
                  <div className="dot">
                    {Object.keys(cartItems).length}
                  </div>
                )
              }

            </Link>
          </div>
        </div>
      </div>
    </>

  )
}

export default Header

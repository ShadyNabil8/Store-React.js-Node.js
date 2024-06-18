import React, { useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { Link } from 'react-router-dom';



const NavBar = () => {
    const [menu, setMenu] = useState('menu')
    return (
        <>
            <div className='navbar'>
                <div className='welcome-msg'>
                    <p>Welcome to Worldwide Electronics Store</p>
                </div>
                <div className="nav">
                    <div className='icon'>
                        <CiDeliveryTruck />
                        <p>Track Your Order</p>
                    </div>
                    <Link to='/cart' className='icon'>
                        <HiOutlineShoppingBag />
                        <p>Shop</p>

                    </Link>
                    <Link className='icon' to='/login'>
                        <GoPerson />
                        <p>My Account</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NavBar

import React, { useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";



const NavBar = () => {
    const [menu, setMenu] = useState('menu')
    return (
        <>
            <div className='navbar'>
                <div className='welcome-msg'>
                    <p>Welcome to Worldwide Electronics Store</p>
                </div>
                <div className="nav">
                    <div>
                        <CiDeliveryTruck />
                        <p>Track Your Order</p>
                    </div>
                    <div>
                        <HiOutlineShoppingBag />
                        <p>Shop</p>

                    </div>
                    <div>
                        <GoPerson />
                        <p>My Account</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar

import React, { useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
const NavBar = () => {
    const [menu, setMenu] = useState('menu')
    return (
        <div className='navbar'>
            <img src={assets.logo} className='logo'></img>
            <ul className='navbar_menu'>
                <li onClick={() => { setMenu('home') }} className={menu === 'home' ? 'active' : ''}>Home</li>
                <li onClick={() => { setMenu('menu') }} className={menu === 'menu' ? 'active' : ''}>menu</li>
                <li onClick={() => { setMenu('mobileApp') }} className={menu === 'mobileApp' ? 'active' : ''}>mobile app</li>
                <li onClick={() => { setMenu('contactUs') }} className={menu === 'contactUs' ? 'active' : ''}>contact us</li>
            </ul>
            <div className='navbar_right'>
                <img src={assets.search_icon} alt="" />
                <div className='navbar_search_icon'>
                    <img src={assets.basket_icon} alt="" />
                    <div className='dot'></div>
                </div>
                <button>Sign in</button>
            </div>
        </div>
    )
}

export default NavBar

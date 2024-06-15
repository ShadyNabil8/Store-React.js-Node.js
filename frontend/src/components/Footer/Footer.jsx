import React from 'react'
import './Footer.css'
import { FaTelegramPlane } from "react-icons/fa";
import { assets } from '../../assets/assets'
import { RiCustomerService2Line } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-header">
        <div className="footer-header-left">
          <div className="footer-headet-left-icon">
            <FaTelegramPlane className='icon' />
            <p>Sign up to Newsletter</p>
          </div>
          <p>and stay tuned up</p>
        </div>
        <div className="footer-header-right">
          <div className="signup-bar">
            <input type="text" placeholder='Enter your email address' />
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <div className="footer-body">
        <div className="footer-body-info">
          <div className="footer-body-info-left">
            <div className="footer-logo">
              <img src={assets.logo}></img>
            </div>
            <div className="call-us">
              <RiCustomerService2Line className='call-us-icon' />
              <div className="numbers">
                <p className='question'>Got Questions ? Call us !</p>
                <p className='phone-numbers'>01286772013, 055/2364745</p>
              </div>
            </div>
            <div className="address">
              <p style={{ fontSize: 16, fontWeight: 500 }}>Contact Info</p>
              <p style={{ fontSize: 16 }}>Sharqia, Zagazig - Nadi El Moalmeen Street branched from Al-Mohafza Street, the corner of Sonesta Studio</p>
            </div>
            <div className='social-icons'>
              <FaFacebook className='icon facebook' />
              <FaWhatsapp className='icon whatsap'/>
            </div>
          </div>
          <div className="footer-body-info-right">
            <p>Find It Fast</p>
            <p>About</p>
            <p>Contact</p>
            <p>Wishlist</p>
            <p>Compare</p>
            <p>All Categories</p>
          </div>
        </div>
        <div className="footer-body-customer">
          <p>Find It Fast</p>
          <p>About</p>
          <p>Contact</p>
          <p>Wishlist</p>
          <p>Compare</p>
          <p>All Categories</p>
        </div>
      </div>
      <div className="footer-tail">
        <p>Copyright © 2022. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer

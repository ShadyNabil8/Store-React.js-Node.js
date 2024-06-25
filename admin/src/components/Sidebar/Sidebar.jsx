import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosListBox } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";

import './Sidebar.css'
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <IoIosAddCircleOutline className='icon'/>
          <p>List items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <IoIosListBox className='icon' />
          <p>Add item</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          <FaRegCalendarCheck className='icon' />
          <p>Orders</p>
        </NavLink>
      </div>

    </div>
  )
}

export default Sidebar

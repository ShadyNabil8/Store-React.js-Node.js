import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosListBox } from "react-icons/io";
import { VscTypeHierarchySub } from "react-icons/vsc";
import { FaRegCalendarCheck } from "react-icons/fa";

import './Sidebar.css'
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <IoIosAddCircleOutline className='icon'/>
          <p>Add items</p>
        </NavLink>
        <NavLink to='/addcategory' className="sidebar-option">
          <VscTypeHierarchySub className='icon'/>
          <p>Add Category</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <IoIosListBox className='icon' />
          <p>Items list</p>
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

// Sidebar.js
import React, { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { sidebarData } from './SidebarData'
import './SideBar.css';
const SidebarItem = ({ name, children, setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidebar-item">
      <div className="sidebar-title" onClick={() => {
        setIsOpen(!isOpen);
        setSelectedCategory(name)
      }}>
        <span>{name}</span>
        <span>{isOpen ? <FaAngleDown /> : <FaAngleRight />}</span>
      </div>
      {isOpen && <div className="sidebar-content">{children}</div>}
    </div>
  );
};

const Sidebar = ({ setSelectedCategory,slidingSidebar,sidebarPosition }) => {
  return (
    <>
      <div className={(sidebarPosition === 'normal') ? 'sidebar' : ((slidingSidebar) ? 'sliding-sidebar sliding-sidebar-show' : 'sliding-sidebar')}>
        {
          sidebarData.map((category, index) => {
            return (
              <SidebarItem key={index} name={category.name} setSelectedCategory={setSelectedCategory}>
                {
                  (category.subCategories != null) && category.subCategories.map((subCategory, index) => <div key={index} name className="sidebar-subitem" onClick={() => {
                    setSelectedCategory(subCategory)
                  }}>
                    {subCategory}
                  </div>
                  )
                }
              </SidebarItem>
            )
          })
        }
      </div>
    </>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { sidebarData } from './SidebarData'
import './SideBar.css';
const SidebarItem = ({ name, children, setSelectedCategory, hasChildren }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sidebar-item">
      <div className="sidebar-title">
        <div className="sidebar-icon" onClick={() => {
          setIsOpen(!isOpen);
        }}>
          {(hasChildren && isOpen)
            ? <FaAngleDown />
            : (hasChildren) && <FaAngleRight />
          }
        </div>
        <div className='sidebar-name' onClick={() => {
          setSelectedCategory(name)
        }}>
          {name}
        </div>
      </div>
      {(hasChildren && isOpen) && <div className="sidebar-children">{children}</div>}
    </div>
  );
};

const Sidebar = ({ setSelectedCategory, slidingSidebar, sidebarPosition }) => {
  return (
    <>
      <div className={(sidebarPosition === 'normal') ? 'sidebar' : ((slidingSidebar) ? 'sliding-sidebar sliding-sidebar-show' : 'sliding-sidebar')}>
        {
          sidebarData.map((category, index) => {
            return (
              <SidebarItem key={index} name={category.name} setSelectedCategory={setSelectedCategory} hasChildren={category.subCategories != null}>
                {
                  (category.subCategories != null) && category.subCategories.map((subCategory, index) => {
                    return (
                      <div key={index} className="sidebar-child" onClick={() => {
                        setSelectedCategory(subCategory)
                      }}>
                        {subCategory}
                      </div>
                    )
                  }
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

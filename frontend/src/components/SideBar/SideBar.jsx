import React, { useState, useEffect } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { sidebarData } from './SidebarData'
import './SideBar.css';
import axios from 'axios'

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
          setSelectedCategory({
            name: name,
            type: 'category'
          });
        }}>
          {name}
        </div>
      </div>
      {(hasChildren && isOpen) && <div className="sidebar-children">{children}</div>}
    </div>
  );
};

const Sidebar = ({ setSelectedCategory, slidingSidebar, sidebarPosition }) => {
  const [categoryList, setCategoryList] = useState([]);
  console.log('SIDEBAR RERENDER');
  const featchCategoryList = async () => {
    try {
      const response = await axios.get('http://localhost:5000/category/list')
      const updatedData = response.data.data.map((category) => {
        if (category.sub.length > 0) {
          category.sub = category.sub.map((subId) => {
            const subCat = response.data.data.find(item => subId === item._id);
            if (subCat) {
              subCat.visited = true;
              return subCat;
            }
            return subId; // Return original subId if subCat not found
          });
          return category;
        }
      }).filter(item => item !== undefined);

      // Add unvisited items to updatedData
      response.data.data.forEach((item) => {
        if (item.sub.length === 0 && !item.visited) {
          updatedData.push(item);
        }
      });


      setCategoryList(updatedData)
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response) {
        // The request was made, and the server responded with a status code outside of the range of 2xx
        console.error('Server responded with:', error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
    }
  }
  useEffect(() => {
    featchCategoryList()
  }, [])
  return (
    <>
      <div className={(sidebarPosition === 'normal') ? 'sidebar' : ((slidingSidebar) ? 'sliding-sidebar sliding-sidebar-show' : 'sliding-sidebar')}>
        {
          categoryList.map((category, index) => {
            return (
              <SidebarItem key={index} name={category.name} setSelectedCategory={setSelectedCategory} hasChildren={category.sub.length > 0}>
                {
                  (category.sub.length > 0) && category.sub.map((subCategory, index) => {
                    return (
                      <div key={index} className="sidebar-child" onClick={() => {
                        setSelectedCategory({
                          name: subCategory.name,
                          type: 'sub'
                        });
                      }}>
                        {subCategory.name}
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

import React, { useState } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
    const [selectedItem, setSelectedItem] = useState('all');
    return (
        <div className='exploreList'>
            <h2>Explore our components</h2>
            <p>Our marketplace is designed to provide you with the latest technology at competitive prices, ensuring you have everything you need to bring your projects to life. Whether you're building your next groundbreaking device or simply upgrading your existing setup, our commitment to excellence guarantees you'll find the best products and support right here.</p>
            <div className='exploreListItems'>
                {menu_list.map((item, index) => {
                    return (
                        <div className='exploreListItem' key={index} onClick={() => { setSelectedItem(state => state === item.menu_name ? 'all' : item.menu_name) }}>
                            <img className={selectedItem === item.menu_name ? 'active' : ''} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr></hr>
        </div>
    )
}

export default ExploreMenu

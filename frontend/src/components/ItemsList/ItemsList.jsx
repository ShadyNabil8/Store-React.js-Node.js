import React, { useState } from 'react'
import { useContext } from 'react'
import { itemsContext } from '../../Contexts/StoreContext'
import Item from '../Item/Item'
import './ItemsList.css'
import { FaListUl } from "react-icons/fa6";
import { BsFillGrid3X3GapFill } from "react-icons/bs";


const ItemsList = ({ selectedCategory }) => {
    const [display, setDisplay] = useState('grid');
    const { items_list } = useContext(itemsContext)

    return (
        <div className='items-view'>
            <div className='display-control'>
                <div className='display-icons'>
                    <BsFillGrid3X3GapFill 
                            className='grid-icon' 
                            onClick={() => { setDisplay('grid') }} 
                            style={(display==='grid')?{opacity:1}:{opacity:0.5}}
                    />
                    <FaListUl 
                            className='list-icon' 
                            onClick={() => { setDisplay('flex') }} 
                            style={(display==='flex')?{opacity:1}:{opacity:0.5}}
                    />
                </div>
                <div className='filters'>
                    <select name="sorting" id="" className='sorting'>
                        <option value="default">Default sorting</option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="average">Sort by average rating</option>
                        <option value="latest">Sort by latest</option>
                        <option value="price_h_l">Sort by price: high to low</option>
                        <option value="price_l_h">Sort by price: low to hight</option>
                    </select>
                    <select name="batching" id="" className='batching'>
                        <option value="all">Show all</option>
                        <option value="32">Show 32</option>
                        <option value="16">Show 16</option>
                    </select>
                </div>
            </div>
            <div className={display === 'flex' ? 'items-list-flex' : 'items-list-grid'}>
                {
                    items_list.map((item, index) => {
                        if (selectedCategory === 'all' || selectedCategory === item.category) {
                            return (
                                <Item key={index} id={item._id} name={item.name} price={item.price} image={item.image} display={display}>

                                </Item>
                            )
                        }
                    })
                }
            </div>
        </div>

    )
}

export default ItemsList

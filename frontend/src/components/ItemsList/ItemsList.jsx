import React, { useState, useEffect } from 'react'
import Item from '../Item/Item'
import './ItemsList.css'
import { FaListUl } from "react-icons/fa6";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import axios from 'axios'

const ItemsList = ({ selectedCategory }) => {
    const [items, setItems] = useState([])
    console.log('ITEMLIST RERNDER');
    const [display, setDisplay] = useState('grid');
    const featchItemList = async () => {
        try {
            const response = await axios.get('http://localhost:5000/component/find', { params: { ...selectedCategory } })
            setItems(response.data.data)
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
        featchItemList()
    },[selectedCategory])
    return (
        <div className='items-view'>
            <div className='display-control'>
                <div className='display-icons'>
                    <BsFillGrid3X3GapFill
                        className='grid-icon'
                        onClick={() => { setDisplay('grid') }}
                        style={(display === 'grid') ? { opacity: 1 } : { opacity: 0.5 }}
                    />
                    <FaListUl
                        className='list-icon'
                        onClick={() => { setDisplay('flex') }}
                        style={(display === 'flex') ? { opacity: 1 } : { opacity: 0.5 }}
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
                    items.map((item, index) => {
                        return (
                            <Item key={index} category={item.category} subCategory={item.subCategory} id={item._id} name={item.name} price={item.price} image={item.image} description={item.description} inStock={item.inStock} display={display}>

                            </Item>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default ItemsList

import React from 'react'
import { useContext } from 'react'
import { itemsContext } from '../../Contexts/StoreContext'
import Item from '../Item/Item'
import './ItemsList.css'

const ItemsList = ({ selectedCategory }) => {
    const { items_list } = useContext(itemsContext)
    return (
        <>
            <div className='items-list'>
                {
                    items_list.map((item, index) => {
                        if (selectedCategory === 'all' || selectedCategory === item.category) {
                            return (
                                <Item key={index} id={item._id} name={item.name} price={item.price} image={item.image}></Item>
                            )
                        }
                    })
                }
            </div>
        </>

    )
}

export default ItemsList

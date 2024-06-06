import React from 'react'
import { useContext } from 'react'
import { itemsContext } from '../../Contexts/StoreContext'
import Item from '../Item/Item'
import './ItemsList.css'

const ItemsList = () => {
    const { items_list } = useContext(itemsContext)
    return (
        <div className='itemsExplore'>
            <h2>Explore Components</h2>
            <div className='itemsList'>
                {
                    items_list.map((item, index) => {
                        return (
                            <Item key={index} id={item._id} name={item.name} price={item.price} image={item.image}></Item>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default ItemsList

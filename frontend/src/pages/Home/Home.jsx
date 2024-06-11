import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import ItemsList from '../../components/ItemsList/ItemsList'
import './Home.css'
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  return (
    <div className='up-home'>
      <Header></Header>
      <div className='down-home'>
        <SideBar setSelectedCategory={setSelectedCategory} ></SideBar>
        <ItemsList selectedCategory={selectedCategory}></ItemsList>
      </div>
    </div>
  )
}

export default Home

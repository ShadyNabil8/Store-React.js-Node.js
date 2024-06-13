import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import ItemsList from '../../components/ItemsList/ItemsList'
import './Home.css'
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className={(sidebarOpen) ? "overlay overlay-show" : "overlay"} onClick={() => { setSidebarOpen(!sidebarOpen) }}></div>
      <div className='up-home'>
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}></Header>
        <div className='down-home'>
          <SideBar setSelectedCategory={setSelectedCategory} sidebarOpen={sidebarOpen}></SideBar>
          <ItemsList selectedCategory={selectedCategory}></ItemsList>
        </div>
      </div>
    </>
  )
}

export default Home

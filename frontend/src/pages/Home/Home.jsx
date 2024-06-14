import React, { useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import ItemsList from '../../components/ItemsList/ItemsList'
import './Home.css'
const Home = ({ slidingSidebar, setSlidingSidebar, selectedCategory, setSelectedCategory }) => {
  return (
    <>
      <div className={(slidingSidebar) ? "overlay overlay-show" : "overlay"} onClick={() => { setSlidingSidebar(false) }}></div>
      <div className='home'>
        <SideBar setSelectedCategory={setSelectedCategory} slidingSidebar={slidingSidebar} sidebarPosition='normal'></SideBar>
        <ItemsList selectedCategory={selectedCategory}></ItemsList>
      </div>
    </>
  )
}

export default Home

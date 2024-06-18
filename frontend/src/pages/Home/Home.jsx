import React, { useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import ItemsList from '../../components/ItemsList/ItemsList'
import './Home.css'
const Home = ({ slidingSidebar, selectedCategory, setSelectedCategory }) => {
  console.log('home reload');
  return (
    <>
      <div className='home'>
        <SideBar setSelectedCategory={setSelectedCategory} slidingSidebar={slidingSidebar} sidebarPosition='normal'></SideBar>
        <ItemsList selectedCategory={selectedCategory}></ItemsList>
      </div>
    </>
  )
}

export default Home

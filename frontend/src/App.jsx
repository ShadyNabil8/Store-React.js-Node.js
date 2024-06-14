import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
const App = () => {
  const [slidingSidebar, setSlidingSidebar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <div className='app'>
      
      <div className={(slidingSidebar) ? "overlay overlay-show" : "overlay"} onClick={() => { setSlidingSidebar(false) }}></div>
      
      <NavBar />

      <Header
        setSlidingSidebar={setSlidingSidebar}
        slidingSidebar={slidingSidebar}>
      </Header>

      <SideBar
        setSelectedCategory={setSelectedCategory}
        slidingSidebar={slidingSidebar}
        sidebarPosition='sliding'>

      </SideBar>

      {/* <Home
        slidingSidebar={slidingSidebar}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}>
      </Home> */}
      
      <Login>

      </Login>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Cart from './pages/Cart/Cart'

const App = () => {
  const [slidingSidebar, setSlidingSidebar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [slidingSearch, setSlidingSearch] = useState(false);

  return (
    <BrowserRouter>
      <div className='app'>
        <div className={(slidingSidebar) ? "overlay overlay-show" : (slidingSearch) ? "overlay overlay-show-transparent" : "overlay"} onClick={() => { setSlidingSidebar(false); setSlidingSearch(false) }}></div>

        <NavBar>

        </NavBar>

        <Header
          slidingSearch={slidingSearch}
          setSlidingSearch={setSlidingSearch}
          setSlidingSidebar={setSlidingSidebar}
          slidingSidebar={slidingSidebar}>
        </Header>

        <SideBar
          setSelectedCategory={setSelectedCategory}
          slidingSidebar={slidingSidebar}
          sidebarPosition='sliding'>
        </SideBar>

        <Routes>
          <Route index element={<Home
            slidingSidebar={slidingSidebar}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}>
          </Home>} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import AddCategory from './pages/AddCategory/AddCategory'
function App() {

  return (
    <div className='app'>
      <Navbar></Navbar>
      <div className="app-content">
        <Sidebar></Sidebar>
        <Routes>
          <Route path='/add' element={<Add />}></Route>
          <Route path='/addcategory' element={<AddCategory />}></Route>
          <Route path='/list' element={<List />}></Route>
          <Route path='/orders' element={<Orders />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App

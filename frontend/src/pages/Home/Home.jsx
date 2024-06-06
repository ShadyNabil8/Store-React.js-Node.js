import React from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import ItemsList from '../../components/ItemsList/ItemsList'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <ExploreMenu></ExploreMenu>
      <ItemsList></ItemsList>
    </div>
  )
}

export default Home

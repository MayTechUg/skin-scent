import React from 'react'
import Header from './Head'
import NavSpace from './navSpace'
import Main from './Main'
import Hero from './HeroSection'
import SubFooter from '../products/SubFooter'
import '../style/homePage.css'
import '../style/productsPage.css'

const HomePage = ({setSelectedType,setSelectedCollection}) => {
  return (
    <div className='Homepage'>
      <Header/>
      <NavSpace setSelectedCollection={setSelectedCollection}/>
      <Hero/>
      <Main setSelectedType={setSelectedType}/>
      <SubFooter/>
    </div>
  )
}

export default HomePage
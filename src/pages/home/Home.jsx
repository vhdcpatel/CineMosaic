import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'

import "./Home.css"

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <div style={{height:1000}}></div>
    </div>
  )
}

export default Home
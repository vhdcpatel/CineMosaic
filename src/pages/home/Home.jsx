import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'

import "./Home.css"

const Home = () => {
  return (
    <div className='homePage'>
      <h1>Hello world!</h1>
      <HeroBanner/>
    </div>
  )
}

export default Home
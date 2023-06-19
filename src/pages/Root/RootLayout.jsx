import React, { Fragment } from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const RootLayout = () => {
  return (
    <Fragment>
      <Header/>
      <Outlet></Outlet>
      <Footer/>
    </Fragment>
  )
}

export default RootLayout
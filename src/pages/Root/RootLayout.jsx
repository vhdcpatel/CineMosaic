import React, { Fragment } from 'react'
import Header from '../../components/header/Header'
import { Navigate, Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import { useSelector } from 'react-redux'

// This will also handle if user is not signed In then navigate to auth page.
const RootLayout = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return user ? (
    <Fragment>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </Fragment>) :
    <Navigate to="/auth" />;

}

export default RootLayout
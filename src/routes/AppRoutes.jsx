import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from '../pages/Root/RootLayout'
import Home from '../pages/home/Home'
import Details from '../pages/details/Details'
import SearchResults from '../pages/serachResults/SearchResults'
import Explore from '../pages/explore/Explore'
import Error from '../pages/error/Error'
import AuthPage from '../pages/auth/AuthPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>} />
        <Route path=":mediaType/:id" element={<Details />} />
        <Route path="search/:query" element={<SearchResults />} />
        <Route path="explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes;
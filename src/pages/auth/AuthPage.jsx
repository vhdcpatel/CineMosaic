import React from 'react'
import Auth from '../../components/auth/Auth'
import HeaderError from '../../components/errorPage/HeaderError';
import background from '../../assets/background.jpg';
import LazyLoadingImages from '../../components/lazyLoadingImages/LazyLoadingImages';
import './authPageStyles.css'

const AuthPage = () => {
  return (
    <div className="auth-page">
       <LazyLoadingImages
        src={background}
        className="auth-background"
      />
      <HeaderError/>
      <div className="auth-container">
        <Auth/>
      </div>
    </div>
  )
}

export default AuthPage;
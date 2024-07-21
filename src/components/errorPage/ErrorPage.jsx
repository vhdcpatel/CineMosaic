import React from 'react'
import Footer from '../footer/Footer'
import HeaderError from './HeaderError'
import Wrapper from '../wrapper/Wrapper'

const ErrorPage = () => {
  return (
    <>
    <div className="mainOuterCtnErr">
      <HeaderError/>
      <div className="mainContain">
        <Wrapper className="err_contentWrapper">
          <h1 className="error-message">We apologize, but an unexpected error has occurred on our end.</h1>
        </Wrapper>
        </div>
      <Footer/>
    </div>
  </>
  )
}

export default ErrorPage
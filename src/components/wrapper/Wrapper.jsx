import React from 'react'
import "./Wrapper.css"

const Wrapper = ({children}) => {
  return (
    <div className='containWrapper'>{children}</div>
  )
}

export default Wrapper
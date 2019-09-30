import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img className="logo" alt="klowd.io" src={require('./logo.png')} />
      </div>
    </div>
  )
}

export default Header

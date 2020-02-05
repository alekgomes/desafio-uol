import React from 'react'
import './Header.scss'
import logo from '../assets/uol-lg.png'

const Header = () => {
    return (
      <header className="header">
        <img src={logo} alt="Logo UOL" className="logo"/>
      </header>
    )
}

export default Header
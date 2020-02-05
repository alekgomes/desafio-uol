import React, { Component } from 'react'
import './Header.scss'
import logo from '../assets/uol-lg.png'
class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="Logo UOL" className="logo"/>
      </header>
    )
  }
}

export default Header
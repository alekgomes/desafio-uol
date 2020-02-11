import React from 'react'
import './Layout.scss'
import logo from '../../assets/uol-lg.png'

const Layout = (props) => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="Logo UOL" className="logo"/>
      </header>
      <section className="painel-clientes">
      <h1 className="painel-clientes__title">
        <i className="icon far fa-user fa-lg"></i>
        Painel de clientes
      </h1>
      <hr className="divider"/>
        {props.children}
      </section>
    </>
  )
}

export default Layout
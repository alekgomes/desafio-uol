import React, { Component } from 'react'
import './PainelClientes.scss'
import UsuariosWrapper from './UsuariosWrapper'
import NovoUsuario from './NovoUsuario'

class PainelClients extends Component {
  render() {
    return (
      <section className="painel-clientes">
        <h1 className="painel-clientes__title">
          <i className="icon far fa-user fa-lg"></i>
          Painel de clientes
        </h1>
        <hr className="divider"/>
        {<NovoUsuario />}
        {/* <UsuariosWrapper /> */}
      </section>
    )
  }
}

export default PainelClients

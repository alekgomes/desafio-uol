import React, { Component } from 'react'
import UsuarioCard from './UsuarioCard'

class UsuariosLista extends Component {

  render() {
    return (
      <div className="painel-clientes__lista">
        {this.props.users.map(user => {
          return <UsuarioCard user={user} />
        })}
      </div>
    )
  }
}

export default UsuariosLista

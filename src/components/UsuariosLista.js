import React, { Component } from 'react'
import UsuarioCard from './UsuarioCard'
import PropTypes from 'prop-types'

class UsuariosLista extends Component {

  render() {
    return (
      <div className="painel-clientes__lista">
        {this.props.users.map(user => {
          return <UsuarioCard user={user} key={user._id} /> 
        })}
      </div>
    )
  }
}

UsuariosLista.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UsuariosLista

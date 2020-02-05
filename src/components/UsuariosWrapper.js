import React, { Component } from 'react'
import './UsuariosWrapper.scss'
import UsuariosNovo from './UsuariosNovo'
import UsuariosLista from './UsuariosLista'

class UsuariosWrapper extends Component {
  render() {
    return (
      <>
        <UsuariosNovo />
        <UsuariosLista />
      </>
    )
  }
}

export default UsuariosWrapper

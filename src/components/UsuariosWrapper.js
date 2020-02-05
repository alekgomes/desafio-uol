import React, { Component } from 'react'
import './UsuariosWrapper.scss'
import UsuariosNovo from './UsuariosNovo'
import UsuariosLista from './UsuariosLista'
import axios from 'axios'

class UsuariosWrapper extends Component {

  state = {
    users: []
  }

  async componentDidMount() {
    const response = await axios.get('https://demo5283088.mockable.io/customers')
    this.setState({users: response.data.data})
  }

  render() {
    return (
      <>
        <UsuariosNovo />
        <UsuariosLista users={this.state.users} />
      </>
    )
  }
}

export default UsuariosWrapper

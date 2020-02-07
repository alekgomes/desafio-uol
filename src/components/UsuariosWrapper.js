import React, { Component } from 'react'
import './UsuariosWrapper.scss'
import UsuariosNovo from './UsuariosNovo'
import UsuariosLista from './UsuariosLista'
import axios from 'axios'

class UsuariosWrapper extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({loading: true})
    const response = await axios.get('https://demo5283088.mockable.io/customers')
    this.setState({users: response.data.data, loading: false})
  }

  render() {

    const content = this.state.loading ? 'AGUARDANDO' : <UsuariosLista users={this.state.users} />

    return (
      <>
        <UsuariosNovo />
        {content}
      </>
    )
  }
}

export default UsuariosWrapper

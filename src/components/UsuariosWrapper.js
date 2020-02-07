import React, { Component } from 'react'
import './UsuariosWrapper.scss'
import UsuariosNovo from './UsuariosNovo'
import UsuariosLista from './UsuariosLista'
import axios from 'axios'
import PubSub from 'pubsub-js'

class UsuariosWrapper extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({loading: true})
    const response = await axios.get('https://demo5283088.mockable.io/customers')
    const usersFromLocalStorage = await this.getFromLocalStorage()  
    const users = response.data.data.concat(usersFromLocalStorage)
    this.setState({users, loading: false})

    PubSub.subscribe('novo-usuario', (topico, data) => {
      const users = this.state.users
      const newUsers = users.concat(data)
      this.setState({users: newUsers})
    })
  }

  getFromLocalStorage() {
    let users;

    if (JSON.parse(localStorage.getItem("users")) == null) {
      users = []
    } else {
      users = JSON.parse(localStorage.getItem("users"))
    }

    return users
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

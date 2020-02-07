import React, { Component } from 'react'
import UserInput from './UserInput'
import './NovoUsuario.scss'
import PubSub from 'pubsub-js'

class NovoUsuario extends Component {

  state = {
    _id: 100,
    name: '',
    email:'',
    cpf:'',
    tel:'',
    status:'',
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()    
    const user = this.createUser()
    this.addToLocalStorage(user)

    PubSub.publish('novo-usuario', user)
  }

  addToLocalStorage = user => {
    let users;

    if (JSON.parse(localStorage.getItem("users")) == null) {
      users = []
    } else {
      users = JSON.parse(localStorage.getItem("users"))
    }
    
    users = users.concat(user)
    localStorage.setItem("users", JSON.stringify(users))
  }

  createUser = () => {
    const user = {
      _id: this.state._id,
      name: this.state.name,
      cpf: this.state.cpf,
      contact: {
        email: this.state.email,
        tel: this.state.tel
      },
      status: this.state.status
    }

    return user
  }

  render() {
    return (
        <section className="novo-usuario">
          <div className="novo-usuario__header">
            <p>Novo Usuário</p>
            <p>Informe os campos a seguir para criar novo usuário:</p>
          </div>
          <form className="novo-usuario__form" onSubmit={this.handleSubmit}>
            <UserInput id="name" name="name" placeholder="Nome" value={this.state.name} handleInput={this.handleInput}/>
            <UserInput id="email" name="email" placeholder="E-mail" value={this.state.email} handleInput={this.handleInput}/>
            <UserInput id="cpf" name="cpf" placeholder="CPF" value={this.state.cpf} handleInput={this.handleInput}/>
            <UserInput id="telefone" name="telefone" placeholder="Telefone" value={this.state.telefone} handleInput={this.handleInput}/>
            <UserInput id="status" name="status"  placeholder="Status" value={this.state.status} handleInput={this.handleInput}/>
            <div className="buttons">
              <button type="submit" className="create">Criar</button>
              <button className="back">Voltar</button>
            </div>
          </form>
        </section>
    )
  }
}

export default NovoUsuario

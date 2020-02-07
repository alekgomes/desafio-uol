import React, { Component } from 'react'
import UserInput from './UserInput'
import './NovoUsuario.scss'

class NovoUsuario extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
        <section className="novo-usuario">
          <div className="novo-usuario__header">
            <p>Novo Usuário</p>
            <p>Informe os campos a seguir para criar novo usuário:</p>
          </div>
          <form className="novo-usuario__form" onSubmit={this.handleSubmit}>
            <UserInput id="name" name="name" placeholder="Nome"/>
            <UserInput id="email" name="email" placeholder="E-mail"/>
            <UserInput id="cpf" name="cpf" placeholder="CPF"/>
            <UserInput id="telefone" name="telefone" placeholder="Telefone"/>
            <UserInput id="status" name="status"  placeholder="Status"/>
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

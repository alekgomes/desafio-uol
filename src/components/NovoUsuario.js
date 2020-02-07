import React, { Component } from 'react'
import UserInput from './UserInput'

class NovoUsuario extends Component {
  render() {
    return (
        <section className="novo-usuario">
          <div className="novo-usuario__header">
            <p>Novo Usuário</p>
            <p>Informe os campos a seguir para criar novo usuário:</p>
          </div>
          <form className="novo-usuario__form">
            <UserInput id="name" name="name"/>
            <UserInput id="email" name="email"/>
            <UserInput id="cpf" name="cpf" />
            <UserInput id="telefone" name="telefone"/>
            <UserInput id="status" name="status"/>
          </form>
        </section>
    )
  }
}

export default NovoUsuario

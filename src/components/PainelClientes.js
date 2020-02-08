import React, { Component } from 'react'
import './PainelClientes.scss'
import UsuariosWrapper from './UsuariosWrapper'
import NovoUsuario from './NovoUsuario'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class PainelClients extends Component {
  render() {
    return (
      <section className="painel-clientes">
        <h1 className="painel-clientes__title">
          <i className="icon far fa-user fa-lg"></i>
          Painel de clientes
        </h1>
        <hr className="divider"/>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={UsuariosWrapper}/>
            <Route path="/novo" component={NovoUsuario} />                     
          </Switch>
        </BrowserRouter>
      </section>
    )
  }
}

export default PainelClients

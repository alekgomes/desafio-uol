import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import UsuariosWrapper from "./components/User/UsuarioWrapper/UsuariosWrapper";
import NovoUsuario from "./components/User/NovoUsuario/NovoUsuario";
import EditarUsuario from "./components/User/EditarUsuario/EditarUsuario"
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={UsuariosWrapper} />
              <Route path="/novo" component={NovoUsuario} />
              <Route path="/editar/:id" component={EditarUsuario}/>
            </Switch>
          </BrowserRouter>
        </Layout>
      </div>
    );
  }
}

export default App;

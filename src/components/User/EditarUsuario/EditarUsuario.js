import React, { Component } from "react";
import UserInput from "../../UI/UserInput/UserInput";
import { Link } from "react-router-dom";

class EditarUsuario extends Component {
  state = {
    _id: this.props.match.params.id,
    name: "",
    email: "",
    cpf: "",
    tel: "",
    status: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getUser = () => {
    const users = JSON.parse(localStorage.getItem("users"))
    let user = ""
    users.map(u => {      
      if (u._id === this.state._id){
        user = u
      }
    })

    return user
  }

  componentDidMount() {
    this.setState(this.getUser())
  }

  render() {
    
    return (
      <section className="novo-usuario">
        <div className="novo-usuario__header">
          <p>Editar Usuário</p>
          <p>Informe os campos a seguir para criar novo usuário:</p>
        </div>
        {/* {this.state.alert && <p className="alert">{this.state.alert}</p>} */}
        <form className="novo-usuario__form" onSubmit={this.handleSubmit}>
          <UserInput
            id="name"
            name="name"
            placeholder="Nome"
            value={this.state.name}
            handleInput={this.handleInput}
            type="text"
            minLength="3"
          />
          <UserInput
            id="email"
            name="email"
            placeholder="E-mail"
            value={this.state.email}
            handleInput={this.handleInput}
            type="email"
          />
          <UserInput
            id="cpf"
            name="cpf"
            placeholder="CPF"
            value={this.state.cpf}
            handleInput={this.handleInput}
            type="text"
            minLength="14"
          />
          <UserInput
            id="telefone"
            name="tel"
            placeholder="Telefone"
            value={this.state.tel}
            handleInput={this.handleInput}
            type="text"
          />
          <UserInput
            id="status"
            name="status"
            placeholder="Status"
            value={this.state.status}
            handleInput={this.handleInput}
            type="select"
          />
          <div className="buttons">
            <button type="submit" className="create">
              Atualizar
            </button>
            <Link to="/">
              <button className="back">Voltar</button>
            </Link>
          </div>
        </form>
      </section>
    );
  }
}

export default EditarUsuario;

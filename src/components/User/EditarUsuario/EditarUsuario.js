import React, { Component } from "react";
import UserInput from "../../UI/UserInput/UserInput";
import { Link } from "react-router-dom";

class EditarUsuario extends Component {
  state = {
    _id: this.props.match.params.id,
    name: "",
    contact: {
      email: "",
      tel: ""
    },
    cpf: "",
    status: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.updateUser();
  };

  updateUser = () => {
    let user = this.getUser();
    user = Object.assign(user, this.state);
    const newUsers = this.removeUser(this.state);
    newUsers.push(user)
    localStorage.setItem("users", JSON.stringify(newUsers));
  };

  getUser = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    let user = "";
    users.map(u => {
      if (u._id === this.state._id) {
        user = u;
      }
    });

    return user;
  };

  removeUser = user => {
    const users = JSON.parse(localStorage.getItem("users"));
    users.map((u, index) => {
      if (u._id === user._id) {
        users.splice(index, 1);
        console.log(u);
      }
    });
    return users;
  };

  componentDidMount() {
    this.setState(this.getUser());
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
            value={this.state.contact.email}
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
            value={this.state.contact.tel}
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
            <button
              type="submit"
              onSubmit={this.handleSubmit}
              className="create"
            >
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

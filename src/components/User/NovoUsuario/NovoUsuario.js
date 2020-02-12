import React, { Component } from "react";
import UserInput from "../../UI/UserInput/UserInput";
import "./NovoUsuario.scss";
import PubSub from "pubsub-js";
import { Link } from "react-router-dom";
import InputMask from "inputmask";

class NovoUsuario extends Component {
  state = {
    name: "",
    email: "",
    cpf: "",
    tel: "",
    status: ""
  };

  componentDidMount() {
    PubSub.subscribe('clear-form', (topico, data) => {this.setState({name:"", email:"", cpf:"", tel:"", status:""})})
  }

  cpfMask = new InputMask("999.999.999-99");

  handleInput = e => {
    if (e.target.name === "cpf") {
      this.setState({
        [e.target.name]: this.cpfMask.mask(document.getElementsByName("cpf"))
      });
    }
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.hasEmptyInput(this.state)) {
      console.log("Tem input vazio");
    } else {
      const user = this.createUser();
      this.addToLocalStorage(user);
      this.clearForm()
      PubSub.publish("novo-usuario", user);
    }
  };

  clearForm = () => {
    this.setState({name:"", email:"", cpf:"", tel:"", status:""})
  } 

  addToLocalStorage = user => {
    let users;

    if (JSON.parse(localStorage.getItem("users")) == null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem("users"));
    }

    users = users.concat(user);
    localStorage.setItem("users", JSON.stringify(users));
  };

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
    };

    return user;
  };

  hasEmptyInput = inputs => {
    let empty = false;

    Object.values(inputs).map(input => {
      if (input === "") {
        empty = true;
      }
    });
    return empty;
  };

  render() {
    return (
      <section className="novo-usuario">
        <div className="novo-usuario__header">
          <p>Novo Usuário</p>
          <p>Informe os campos a seguir para criar novo usuário:</p>
        </div>
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
            minLength="11"
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
              Criar
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

export default NovoUsuario;

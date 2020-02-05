import React, { Component } from 'react'
import './UsuarioCard.scss'

class UsuarioCard extends Component {

  render() {
    return (
      <div className="user-card">
        <div className="user-card__name">
          <p>{this.props.user.name}</p>
          <p>{this.props.user.contact.email}</p>
        </div>
        <div className="user-card__phone">
          <p>{this.props.user.cpf}</p>
          <p>{this.props.user.contact.tel}</p>
        </div>
        <div className="user-card__status">
          <p>
            <span className={`status ${this.props.user.status.toLowerCase()}`}></span>
            {this.props.user.status}
          </p>
        </div>
        <button className="user-card__edit">Editar</button>
      </div>
    )
  }
}

export default UsuarioCard

import React from 'react'
import './UsuarioCard.scss'

const UsuarioCard = props => {
    return (
      <div className="user-card">
        <div className="user-card__name">
          <p>{props.user.name}</p>
          <p>{props.user.contact.email}</p>
        </div>
        <div className="user-card__phone">
          <p>{props.user.cpf}</p>
          <p>{props.user.contact.tel}</p>
        </div>
        <div className="user-card__status">
          <p>
            <span className={`status ${props.user.status.toLowerCase()}`}></span>
            {props.user.status}
          </p>
        </div>
        <button className="user-card__edit">Editar</button>
      </div>
    )
}

export default UsuarioCard

import React from "react";
import "./UsuarioCard.scss";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

const UsuarioCard = props => {

  return (
    <div className="user-card" key={props.user._id}>
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
      <div className="user-card__edit">
        <Link to={`/editar/${props.user._id}`}>
          <Button class="secondary" text="Editar" />
        </Link>
      </div>
    </div>
  );
};

export default UsuarioCard;

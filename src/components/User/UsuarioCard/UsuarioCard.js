import React, { Suspense } from "react";
import "./UsuarioCard.scss";
import Button from "../../UI/Button/Button";

const UsuarioCard = props => {
  return (
    <Suspense>
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
            <span
              className={`status ${props.user.status.toLowerCase()}`}
            ></span>
            {props.user.status}
          </p>
        </div>
        <div className="user-card__edit">
          <Button class="secondary" text="Editar" />
        </div>
      </div>
    </Suspense>
  );
};

export default UsuarioCard;

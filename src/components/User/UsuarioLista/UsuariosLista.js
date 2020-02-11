import React from "react";
import UsuarioCard from "../UsuarioCard/UsuarioCard";
import Button from "../../UI/Button/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UsuariosLista = (props) => {
  return (
    <>
      <div className="painel-clientes__novo">
        <div>
          <p>Listagem de usuários</p>
          <p>Escolha um cliente para visualizar os detalhes</p>
        </div>
        <Link to="/novo">
          <Button class="primary" text="Novo Cliente" />
        </Link>
      </div>
      <div className="painel-clientes__lista">
        {props.users.map(user => {
          return <UsuarioCard user={user} key={user._id} />;
        })}
      </div>
    </>
  );
};

UsuariosLista.propTypes = {
  users: PropTypes.array.isRequired
};

export default UsuariosLista;

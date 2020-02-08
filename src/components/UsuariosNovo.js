import React from 'react'
import './UsuariosNovo.scss'
import { Link } from 'react-router-dom'

const UsuariosNovo = () => {
  return (
    <div className="painel-clientes__novo">
      <div>
        <p>Listagem de usuários</p>
        <p>Escolha um cliente para visualizar os detalhes</p>
      </div>    
      <Link to="/novo">
        <button>
          Novo cliente
        </button>
      </Link>
    </div>
  )
}

export default UsuariosNovo

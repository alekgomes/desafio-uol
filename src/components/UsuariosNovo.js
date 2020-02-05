import React from 'react'
import './UsuariosNovo.scss'

const UsuariosNovo = () => {
    return (
      <div className="painel-clientes__novo">
        <div>
          <p>Listagem de usuários</p>
          <p>Escolha um cliente para visualizar os detalhes</p>
        </div>
        <button>
          Novo cliente
        </button>
      </div>
    )
}

export default UsuariosNovo

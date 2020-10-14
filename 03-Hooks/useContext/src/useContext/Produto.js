import React from 'react'
import UserContext from './UserContext'

const Produto = () => {
  const usuario = React.useContext(UserContext)

  return (
    <div>
      {usuario.nome}
    </div>
  )
}

export default Produto

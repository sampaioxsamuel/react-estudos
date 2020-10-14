import React from 'react'
import { GlobalContext } from './GlobalContext'


const Produto = () => {
  const {dados} = React.useContext(GlobalContext)
  if(dados === null) return null
  else {
    return (
      <div>
        <p>Lista de Produtos</p>
        {dados.map((produto) =>
        <ul key={produto.id}>
          <li>{produto.nome}</li>
        </ul>
        )}
      </div>
    )
  }
}

export default Produto

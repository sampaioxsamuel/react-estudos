import React from 'react'

const Produto = ({produto}) => {
  return (
    <div>
      <h1>{produto.nome}</h1>
      <img src={produto.fotos[0].src} alt={produto.nome}/>
      <p>R$ {produto.preco}</p>
    </div>
  )
}

export default Produto

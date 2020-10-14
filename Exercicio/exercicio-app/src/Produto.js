import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const carrinho = React.useContext(GlobalContext);
  
  const handleClick = () => {
    carrinho.setCarrinho((carrinho) => carrinho + 2);
  };

  return (
    <>
      <h1>Clique para adicionar ao carrinho</h1>
      <p>{carrinho && carrinho.carrinho}</p>
      <button onClick={handleClick}>Adicionar</button>
    </>
  );
};

export default Produto;

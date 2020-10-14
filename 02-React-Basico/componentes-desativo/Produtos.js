import React from 'react';
import Titulo from './Components/Titulo';
import Produto from './Components/Produto';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
  return (
    <section>
      <Titulo texto="Produtos" />
      {produtos.map((item) => (
        <Produto key={item.nome} produto={item} />
      ))}
    </section>
  );
};

export default Produtos;

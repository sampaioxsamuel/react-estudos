import React from 'react';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const statusCliente = dados.ativa ? 'Ativa' : 'Inativa';
  const totalCompras = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((anterior, atual) => anterior + atual);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:
        <span style={{ color: statusCliente ? 'green' : 'red' }}>
          {' '}
          {statusCliente}
        </span>
      </p>
      <p>Valor total de compras: R$ {totalCompras}</p>
      {totalCompras > 10000 ? <p>Você esta gastando muito</p> : ''}
    </div>
  );
};

export default App;

/* Usando objeto com estilo
const totalCompras = dados.compras.reduce((ant, valor) => {
    valor = Number(valor.preco.replace('R$ ', ''));
    return ant + valor;
  }, 0);
const estiloAtiva = dados.ativa ? estiloSituacao.ativa : estiloSituacao.inativa;
const estiloSituacao = {
  ativa: {
    color: 'green',
    fontWeight: 'bold',
  },
  inativa: {
    color: 'black',
  },
};
*/

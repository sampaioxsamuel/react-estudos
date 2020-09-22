import React from 'react';

const nome = 'Samuel Nogueira';
const titulo = <h1>Meu Nome é {nome}</h1>;

function Data() {
  const date = new Date();
  const mes = date.getUTCDate();
  const dia = date.getUTCDay() < 10 ? '0' + date.getUTCDay() : date.getUTCDay();
  const ano = date.getUTCFullYear();
  const hora =
    date.getUTCHours() +
    ':' +
    (date.getUTCMinutes() < 10
      ? '0' + date.getUTCMinutes()
      : date.getUTCMinutes());

  return `${dia}/${mes}/${ano} as ${hora}`;
}

const App = () => {
  const hoje = Data();
  return (
    <>
      {titulo}
      <p>Hoje são: {hoje}</p>
    </>
  );
};

export default App; // ele vai renderizar no index.js qualquer uma das funções que eu passar aqui

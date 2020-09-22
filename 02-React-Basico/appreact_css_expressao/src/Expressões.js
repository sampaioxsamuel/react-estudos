import React from 'react';

const titulo = <h1>Carro a venda</h1>;
const carro = {
  rodas: 4,
  marca: 'Ford',
};

const App = () => {
  return (
    <>
      {titulo}
      <h3>Marca: {carro.marca}</h3>
      <h3>Rodas: {carro.rodas}</h3>
    </>
  );
};

const Form = () => {
  return (
    <>
      <label htmlFor="nome">Nome:</label>
      <input type="text" id="nome" />
    </>
  );
};

export default App;
/*
Se o resultado da expressão for um número, 
string ou array de números/strings o resultado irá aparecer na tela. 
Booleanos (true/false), undefined e null não irão resultar em nada na tela
e caso precise mostrar um objeto tem que dizer qual propriedade
*/

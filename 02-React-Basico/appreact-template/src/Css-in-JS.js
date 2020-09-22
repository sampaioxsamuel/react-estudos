import React from 'react';

const titulo = <h1>Carro a venda</h1>;
const carro = {
  rodas: 4,
  marca: 'Ford',
};

const estiloH3 = {
  color: 'rebeccapurple',
  fontSize: '20px',
  fontWeight: 'bold',
};

const App = () => {
  return (
    <>
      {titulo}
      <h3 style={estiloH3}>Marca: {carro.marca}</h3>
      <h3 style={estiloH3}>Rodas: {carro.rodas}</h3>
    </>
  );
};

export default App;

import React from 'react';

const Titulo = ({ cor, texto }) => {
  // desestruturando o props então posso passar so os atribs
  return <h1 style={{ color: cor }}>{texto}</h1>;
};

const App = () => {
  return (
    <>
      <Titulo cor="blue" texto="OLA =)" />
      <Titulo cor="rebeccapurple" texto="OLA =)" />
    </>
  );
};

export default App;

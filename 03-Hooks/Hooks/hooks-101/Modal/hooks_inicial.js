import React from 'react';

const App = () => {
  const [ativo, setAtivo] = React.useState(true);
  const [dados, setDados] = React.useState({ nome: 'Samuel', idade: 19 });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'tem faculdade' });
  }
  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </div>
  );
};

export default App;

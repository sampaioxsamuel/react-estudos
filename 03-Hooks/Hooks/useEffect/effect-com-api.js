import React from 'react';

const App = () => {
  const [dados, setDados] = React.useState(null);
  
  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
    .then(r => r.json())
    .then(result => setDados(result))
  }, [])

  return (
    <>
      <div>
        {dados && <div>
          <h1>{dados.nome}</h1>
          <p>{dados.descricao}</p>
          </div>}
      </div>
    </>
  );
};

export default App;

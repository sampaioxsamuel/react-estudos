import React from 'react';

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
      .then((response) => response.json())
      .then((result) => setDados(result));
    }
    }, [produto]);
  if (dados === null) return null;
  else {
    return (
      <div>
        <h1> {dados.nome} </h1> <p> R$ {dados.preco} </p>{' '}
      </div>
    );
  }
};

export default Produto;

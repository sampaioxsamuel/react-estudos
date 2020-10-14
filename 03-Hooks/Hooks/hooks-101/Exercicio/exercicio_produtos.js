import React from 'react';
import Produto from './Produto'

const App = () => {
  const [ dados, setDados ] = React.useState(null);
  const [ carregando, setCarregando ] = React.useState(null);

  async function handleProduct(e) {
    setCarregando(true);
    const produto = e.target.innerText;
    const loadApi = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`);
    const responseApi = await loadApi.json();

    setDados(responseApi);
    setCarregando(false);
  }

  return (
    <>
      <button  style={{margin: '.5rem'}} onClick={handleProduct}>Tablet</button>
      <button  style={{margin: '.5rem'}} onClick={handleProduct}>Smartphone</button>
      <button style={{margin: '.5rem'}} onClick={handleProduct}>Notebook</button>
      {carregando && <p>{'...'}</p>}
      {!carregando && dados && <Produto produto={dados} />}
    </>
  );
};

export default App;

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

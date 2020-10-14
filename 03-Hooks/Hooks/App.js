import React from 'react';
import Produto from './Produto';

const App = () => {
  const [produto, setProduto] = React.useState(null);

  /* função responsavel por setar o produto */
  function handleClick({ target }) {
    setProduto(target.innerText)
    console.log(target.innerText);
  }
  
  /* função responsavel por guardar no localStorage o produto setado anteriormente */
  React.useEffect(() => {
    if (produto !== null){
      localStorage.setItem('produto', produto);
    }
  }, [produto])

  /* função responsavel por verificar se existe produto no Storage, se sim ele vai recuperar essse valor e vai acionar o setProduto */
  React.useEffect(() => {
    const produtoLocal = localStorage.getItem('produto')
    if (produtoLocal !== null) setProduto(produtoLocal)
  }, [])
  
  return (
    <div>
      <h1>Preferencia: {produto}</h1>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      {produto && <Produto produto={produto} />}
    </div>
  );
};

export default App;

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

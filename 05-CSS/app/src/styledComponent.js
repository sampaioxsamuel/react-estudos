import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
  display: flex;
  font-family: 'JetBrains Mono';
  margin: auto;
`;

const Produto = styled.div`
  flex: 1;
  flex-direction: column;
`;

const Titulo = styled.h1`
  color: ${(props) => props.cor};
  font-size: 2rem;
  text-align: center;
`;

const Paragrafo = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Botao = styled.button`
  border: 2px solid ${(props) => props.ativo ? 'rebeccapurple': '#333'};
  border-radius: 5px;
  background: ${(props) => props.ativo ? 'rebeccapurple': '#333'};
  color: #fff;
  width: 160px;
  padding: .5rem;
  cursor: pointer;
  &:hover {
    background: ${(props) => !props.ativo ? 'rebeccapurple': ''};
    border: 2px solid ${(props) => !props.ativo ? 'rebeccapurple': 'rebeccapurple'};
  }
`;

const App = () => {

  const [ativo, setAtivo] = React.useState(false)

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <ProdutosContainer>
      <Produto>
        <Titulo cor="rebeccapurple">Produto 1</Titulo>
        <Paragrafo>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim
          at repellat soluta! Quos numquam autem unde illum. Quis exercitationem
          ad necessitatibus voluptates dolorem dignissimos ea recusandae
          inventore tempora sapiente!
        </Paragrafo>
      <Botao ativo={ativo} onClick={handleClick}>Comprar</Botao>
      </Produto>
    </ProdutosContainer>
  );
};

export default App;

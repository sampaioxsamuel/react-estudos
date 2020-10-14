import React from 'react';

const App = () => {
  const [ carrinho, setCarrinho ] = React.useState(1)
  const [ notify, setNofity ] = React.useState(null)
  const timeoutRef = React.useRef();
  
  function handleClick() {
    setCarrinho(carrinho + 1)
    setNofity('Item adicionado ao carrinho')
    
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setNofity(null)
    }, 2000);
  }

  return (
    <div>
      <p>Total: {carrinho}</p>
      <button onClick={handleClick}>Adicionar ao Carrinho</button>
      <p>{notify}</p>

    </div>
  );
};

export default App;

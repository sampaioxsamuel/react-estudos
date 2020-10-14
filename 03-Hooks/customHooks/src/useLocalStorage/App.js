import React from "react";
import useLocalStorage from './useLocalStorage'

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto')
  function handleClick(event) {
    setProduto(event.target.innerText)
  }
  return (
    <>
    <p>Produto Preferido: {produto}</p>
    <button onClick={handleClick}>Celular</button>
    <button onClick={handleClick}>Notebook</button>
  </>
  )

};

export default App;

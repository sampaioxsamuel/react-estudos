import React from 'react';
import Home from './Home';
import Produtos from './Produtos';
import Header from './Components/Header';

const App = () => {
  const { pathname } = window.location;
  let Pagina = Home;
  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }
  return (
    <>
      <Header />
      <Pagina />
    </>
  );
};

export default App;

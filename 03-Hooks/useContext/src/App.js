import React from "react";
import { DadosGlobais } from './GlobalContext'
import Produto from "./Produto";
import Limpar from "./Limpar";

const App = () => {
  
  return (
    <>
    <DadosGlobais>
    <Produto />
    <Limpar />
    </DadosGlobais>
  </>
  ) 
};

export default App;

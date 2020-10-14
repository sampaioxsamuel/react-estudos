import React from "react";
import UserContext from "./UserContext";
import Produto from "./Produto";

const App = () => {
  
  return (
    <UserContext.Provider value={{nome: 'Samuelzin'}}>
    <Produto />
    </UserContext.Provider>
  ) 
};

export default App;

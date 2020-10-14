import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "remover":
      return state.filter((item) => item !== action.content); // vai verificar se o action.content é igual aos valores do "estado" se os itens forem diferentes ele nao faz nada, caso contrario ele remove
    case "adicionar":
      return [...state, action.content];

    default:
      throw new Error("Estado invalido !");
  }
}

const App = () => {
  const [estado, dispatch] = React.useReducer(reducer, ["banana", "uva"]);
  return (
    <div>
      <button onClick={() => dispatch({ type: "remover", content: "banana" })}>
        Remover BANANA
      </button>
      <br />
      <br />
      <br />
      <button onClick={() => dispatch({ type: "adicionar", content: "limao" })}>
        Adicionar LIMAO
      </button>
      <p>{estado}</p>
    </div>
  );
};

export default App;

import React from 'react';

const App = () => {
  const [select, setSelect] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleRadio({ target }) {
    setSelect(target.value);
  }

  return (
    <form>
      <h1>Produtos</h1>
      <label>
        Smartphone
        <input
          type="radio"
          onChange={handleRadio}
          name="produto"
          value="smartphone"
        />
      </label>
      <label>
        TV
        <input type="radio" onChange={handleRadio} name="produto" value="tv" />
      </label>
      <label>
        PC Gamer
        <input
          type="radio"
          onChange={handleRadio}
          name="produto"
          value="pc-gamer"
        />
      </label>
      {select}
      <h2>Cor</h2>
      <label>
        Preto
        <input
          type="radio"
          onChange={({target}) => setCor(target.value)}
          name="cor"
          value="preto"
        />
      </label>
      {cor}
    </form>
  );
};

export default App;

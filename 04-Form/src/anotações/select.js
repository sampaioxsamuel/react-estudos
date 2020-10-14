import React from 'react';

const App = () => {
  const [select, setSelect] = React.useState('')
  return (
    <form>
      <select value={select} onChange={({target}) => setSelect(target.value)} id="">
        <option disabled value=""></option>
        <option value="notebook">Notebook</option>
        <option value="celular">Celular</option>
        <option value="tv">TV</option>
        <option value="pc-gamer">Pc Gamer</option>
      </select>
      {select}
    </form>
  );
};

export default App;

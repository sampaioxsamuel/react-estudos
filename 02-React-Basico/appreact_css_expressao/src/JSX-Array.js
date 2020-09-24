import React from 'react';

const App = () => {
  const filmes = ['Before sunrise', 'Before sunset', 'Before midnight'];
  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme.toLocaleLowerCase().trim()}>{filme}</li>
      ))}
    </ul>
  );
};

export default App;

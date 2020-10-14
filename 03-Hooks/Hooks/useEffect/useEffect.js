import React from 'react';

const App = () => {
  const [contar, setContar] = React.useState(0);

  React.useEffect(() => {
    console.log('Executou');
  }, [])

  React.useEffect(() => {
    document.title = 'Contar ' + contar
  }, [contar])

  return (
    <>
      <button onClick={() => setContar(contar + 1)}>Clique</button>
    </>
  );
};

export default App;

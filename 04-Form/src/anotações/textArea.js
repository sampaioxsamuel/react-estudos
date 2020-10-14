import React from 'react';

const App = () => {
  const [mensagem, setMensagem] = React.useState('');
  return (
    <form>
      <textarea
        id={mensagem}
        value={mensagem}
        onChange={({ target }) => setMensagem(target.value)}
        rows='2'
      />
      <p>{mensagem}</p>
    </form>
  );
};

export default App;

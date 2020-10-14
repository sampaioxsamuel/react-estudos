import React from 'react';

const App = () => {
  const [produto, setProduto] = React.useState('');
  const [comentarios, setComentarios] = React.useState(['ovo']);
  const currentInput = React.useRef();

  function handleClick(event) {
    event.preventDefault();
    setComentarios([...comentarios, produto])
    currentInput.current.focus();
  }

  return (
    <form>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <label htmlFor="">Produtos</label>
      <input
        value={produto}
        onChange={({ target }) => setProduto(target.value)}
        ref={currentInput}
        name="produto"
        type="text"
      />
      <button onClick={handleClick}>Adicionar</button>
    </form>
  );
};

export default App;

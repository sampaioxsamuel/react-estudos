import React from 'react';

const App = () => {
  const [ comentarios, setComentario ] = React.useState([])
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();
  
  function handleClick() {
    setComentario([...comentarios, input])
    setInput('')
    inputElement.current.focus();
  }

  return (
    <div>
     {comentarios.map((comentario, indice) =>
     <ul key={indice}>
        <li>{comentario}</li>
     </ul>
      )}
      <input type="text" ref={inputElement} value={input} onChange={({target}) => setInput(target.value)}/>
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default App;

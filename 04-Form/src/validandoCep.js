import React from 'react';
import Input from './Form/Input';

const App = () => {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function validarCep(valor) {
    const regex = /^\d{5}-?\d{3}$/;
    if (valor.length === 0) {
      setError('Preencha algo');
      return false;
    } else if (!regex.test(valor)) {
      setError('Preencha um cep valido!');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleCep({ target }) {
    validarCep(target.value);
  }

  function handleChange({ target }) {
    if (error) {
      validarCep(target.value);
    }
    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validarCep(cep)) {
      console.log('enviou');
    } else {
      console.log('nao enviou');
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        type="text"
        placeholder="00000-000"
        value={cep}
        onChange={handleChange}
        onBlur={handleCep}
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;

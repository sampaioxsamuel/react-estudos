import React from 'react';

const App = () => {
  const [ form, setForm ] = React.useState({
    nome: '',
    email: '',
  })

  const handleForm = (event) => {
    event.preventDefault();
    console.log(event)
  }

  const handleValues = ({target}) => {
    const { id, value } = target
    setForm({...form, [id]: value})
  }

  return (
    <form onSubmit={handleForm}>
      <label htmlFor="nome">Nome: </label>
      <input id="nome" type="text" value={form.nome} onChange={handleValues}/>
      <label htmlFor="email">Email: </label>
      <input id="email" type="email" value={form.email} onChange={handleValues}/>
      <button>Enviar</button>
      {form.nome}
      {form.email}
    </form>
  )
};

export default App;

/*
Primeira Forma
const [ nome, setNome ] = React.useState('')
const [ email, setEmail ] = React.useState('')
<label htmlFor="nome">Nome: </label>
<input id="nome" type="text" value={nome} onChange={(event) => setNome(event.target.value)}/>
<label htmlFor="email">Email: </label>
<input id="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
*/

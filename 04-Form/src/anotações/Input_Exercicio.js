import React from 'react';

const camposForm = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

const App = () => {
  const [ form, setForm ] = React.useState(
    // cria um objeto de acordo com os campos 'camposForm.id', e toda vez q o array for atualizado esse objeto tbm sera
    camposForm.reduce((acc, campo) => {
      return {
        ...acc,
        [campo.id]: ''
      }
    }, {})
  );
  const [status, setStatus] = React.useState(null)
  
  const fetchUsuario = (formValue) => {
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValue),
    }).then(result => setStatus(result))
  }

  const handleForm = (event) => {
    event.preventDefault();
    fetchUsuario(form)
  }

  const handleValues = ({target}) => {
    const { id, value } = target
    setForm({...form, [id]: value})
  }

  return (
    <form onSubmit={handleForm}> 
      {camposForm.map(({id, label, type}) => 
      <div key={id}>
        <label htmlFor={id}>{label}: </label>
        <input id={id} type={type} value={form[id]} onChange={handleValues}/>  
        </div>
      )}
      {status && status.ok && <p>Formulario Enviado</p>}
      <button>Enviar</button>
    </form>
  )
};

export default App;

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

/*
<label htmlFor="email">Email: </label>
      <input id="email" type="email" value={form.email} onChange={handleValues}/>
      <label htmlFor="senha">Senha: </label>
      <input id="senha" type="password" value={form.senha} onChange={handleValues}/>
      <label htmlFor="cep">Cep: </label>
      <input id="cep" type="text" value={form.cep} onChange={handleValues}/>
      <label htmlFor="rua">Rua: </label>
      <input id="rua" type="text" value={form.rua} onChange={handleValues}/>
      <label htmlFor="bairro">Bairro: </label>
      <input id="bairro" type="text" value={form.bairro} onChange={handleValues}/>
      <label htmlFor="cidade">Cidade: </label>
      <input id="cidade" type="text" value={form.cidade} onChange={handleValues}/>
      <label htmlFor="estado">Estado: </label>
      <input id="estado" type="text" value={form.estado} onChange={handleValues}/>
*/
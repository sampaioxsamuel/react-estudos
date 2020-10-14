import React from "react";
import Input from "./Form/Input";
import useForm from "./Hooks/useForm";

const App = () => {
  const cep = useForm("cep");
  const email = useForm("email");
  const nome = useForm("nome");

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log("enviou");
    } else {
      console.log("nao enviou");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="exemplo@exemplo.com"
        {...email}
      />
      <Input
        label="Nome"
        id="nome"
        type="text"
        placeholder="Seu nome"
        {...nome}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;

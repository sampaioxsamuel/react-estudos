import { useContext } from 'react';
import { USER_POST } from '../../api';
import { useFetch } from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';

const { default: Button } = require('../Forms/Button');
const { default: Input } = require('../Forms/Input');

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const { loading, error, request } = useFetch();
  const { userLogin } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value); // caso o cadastro esteja ok ele ira automaticamente logar aquele usuario cadastrado
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar-se</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;

import { Route, Routes } from 'react-router';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import NotFound from '../NotFound';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="criar" element={<LoginCreate />} />
        <Route exact path="perdeu" element={<LoginPasswordLost />} />
        <Route exact path="resetar" element={<LoginPasswordReset />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Login;

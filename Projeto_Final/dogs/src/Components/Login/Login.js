import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import NotFound from '../NotFound';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import Head from '../Helper/Head';

import styles from './Login.module.css';

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route exact path="criar" element={<LoginCreate />} />
          <Route exact path="perdeu" element={<LoginPasswordLost />} />
          <Route exact path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;

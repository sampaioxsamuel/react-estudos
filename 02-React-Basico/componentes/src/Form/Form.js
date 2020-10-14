import React from 'react';
import Input from './Input';
import Button from './Button';

export const Form = () => {
  return (
    <form method="GET">
      <Input id="nome" label="User" required />
      <Input id="senha" label="Password" type="password" />
      <Button type="submit" texto="Entrar" />
    </form>
  );
};

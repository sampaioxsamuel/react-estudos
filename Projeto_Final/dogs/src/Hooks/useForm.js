import { useState } from 'react';

const types = {
  email: {
    regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    message: 'Preencha um email valido',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'Precisa ter no minimo 8 caracteres, tendo pelo menos 1 digito, 1 letra maiúscula e 1 minúsculo',
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize numeros apenas',
  },
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor.');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) {
      validate(target.value);
    }
    setValue(target.value);
  }
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;

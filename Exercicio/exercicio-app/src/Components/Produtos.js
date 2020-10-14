import React from 'react';

const Produtos = ({ options, id, value, setValue, ...props }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((produto) => produto !== target.value));
    }
  }

  return (
    <>
      {options.map((produto) => (
        <label key={produto} htmlFor={produto}>
          <input
            type="checkbox"
            value={produto}
            onChange={handleChange}
            checked={value.includes(produto)}
          />
          {produto}
        </label>
      ))}
    </>
  );
};

export default Produtos;

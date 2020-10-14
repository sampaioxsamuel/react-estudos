import React from 'react';

const Produto = ({ produto }) => {
  return (
    <div style={{ border: '1px solid', margin: '1rem 0', padding: '1rem' }}>
      <p>{produto.nome}</p>
      <ul key={produto.nome}>
        {produto.propriedades.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;

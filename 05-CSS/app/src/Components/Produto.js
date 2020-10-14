import React from 'react'
import styles from './Produto.module.css'

const Produto = () => {
  return (
    <>
      <h1 className={styles.produto}>Notebook</h1>
      <p className={styles.preco}>Preço: 2000</p>
      <button className={styles.button}>Comprar</button>
    </>
  )
}

export default Produto

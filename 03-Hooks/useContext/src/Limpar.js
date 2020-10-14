import React from 'react'
import {GlobalContext} from './GlobalContext'

const Limpar = () => {
  const limpar = React.useContext(GlobalContext)
  return (
    <button onClick={limpar.limparDados}>
      Limpar
    </button>
  )
}

export default Limpar

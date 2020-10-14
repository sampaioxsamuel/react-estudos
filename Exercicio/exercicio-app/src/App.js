import React from 'react'
import Produtos from './Components/Produtos'

const App = () => {
  const [produtos, setProdutos] = React.useState([])

  return (
    <form>
      <Produtos options={['iPhone 4', 'Macbook 2009', 'iMac 2011']} value={produtos} setValue={setProdutos}/>
      <button>Enviar</button>
    </form>
  )
}

export default App

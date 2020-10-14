import React from 'react'

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const App = () => {
  const [cores, setCores] = React.useState(['roxo', 'laranja']);
  function handleSelect({target}) {
    if (target.checked) {
      setCores([...cores, target.value])
    } else {
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }
  return (
    <form>
      {coresArray.map((cor) =>
        <label style={{textTransform: 'capitalize'}} key={cor}>
          {cor}
          <input type="checkbox" name={cor} value={cor} checked={cores.includes(cor)} onChange={handleSelect}/>
        </label>
      )}
    </form>
  )
}

export default App
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.


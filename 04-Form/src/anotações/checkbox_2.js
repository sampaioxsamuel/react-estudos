import React from 'react'

const App = () => {
  const [cores, setCor] = React.useState(['vermelho'])

  function handleCores({target}) {
    if (target.checked){
      setCor([...cores, target.value])
    } else {
      setCor(cores.filter((cor) => cor !== target.value ))
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor)
  }

  return (
    <form>
      <label>
        <input type="checkbox" name="cor" value="azul" checked={handleChecked('azul')} onChange={handleCores}/>
        Azul
      </label>
      <label>
        <input type="checkbox" name="cor" value="vermelho" checked={handleChecked('vermelho')} onChange={handleCores}/>
        Vermelho
      </label>
    </form>
  )
}

export default App

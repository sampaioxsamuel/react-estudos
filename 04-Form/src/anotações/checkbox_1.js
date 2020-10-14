import React from 'react'

const App = () => {
  const [termos, setTermos] = React.useState(false)
  return (
    <form>
      <label>
        <input type="checkbox" name="termos" value={termos} onChange={({target}) => setTermos(target.checked)}/>
        Li os termos.
      </label>
      <button disabled={!termos}>Continuar</button>
    </form>
  )
}

export default App

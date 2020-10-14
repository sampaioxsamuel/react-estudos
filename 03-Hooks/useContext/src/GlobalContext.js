import React from 'react';

export const GlobalContext = React.createContext();

export const DadosGlobais = ({children}) => {

  const [dados, setDados] = React.useState(null)

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
    .then(response => response.json())
    .then(json => setDados(json))
  }, [])

  const limparDados = () => {
    setDados(null)
  }
  return (
    <GlobalContext.Provider value={{dados, limparDados}}>{children}</GlobalContext.Provider>
  )

}
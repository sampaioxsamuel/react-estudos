import React from 'react'

const Produtos = () => {
  
  React.useEffect(() => {
    const handleScroll = (event) => {
      console.log(event);
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <div style={{height: '100vh'}}>
      <p>Aberto</p>
    </div>
  )
}

export default Produtos

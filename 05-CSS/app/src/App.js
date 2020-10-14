import React from 'react'
import './App.css'
import foto from './img/foto.jpg'
import {ReactComponent as Dog} from './img/dog.svg'
import DogSVG from './DogSVG'

const App = () => {
  return (
    <div>
      <DogSVG />
      <img src={foto} alt="cachorroooo"/>
    </div>
  )
}

export default App

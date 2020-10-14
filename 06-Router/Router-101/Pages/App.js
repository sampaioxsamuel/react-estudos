import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />}  />
      <Route path="sobre" element={<Sobre />} />
      <Route path="contato" element={<Contato />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

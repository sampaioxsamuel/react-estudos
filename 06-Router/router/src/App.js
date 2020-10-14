import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Sobre from "./Sobre";

const NotFound = () => {
  return <h1>Pagina nao encontrada</h1>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

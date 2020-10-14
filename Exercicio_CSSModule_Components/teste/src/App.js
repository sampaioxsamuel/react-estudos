import React from "react";
import Header from "./Components/Header";

const contato = [
  {
    label: "Home",
    link: "www.sobre.com",
  },
  {
    label: "Sobre 2",
    link: "www.sobre.com",
  },
];

const App = () => {
  return <Header links={contato} />;
};

export default App;

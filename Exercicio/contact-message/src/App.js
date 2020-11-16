import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import history from "./context/history";

/* storage */
import { Storage } from "./context/GlobalContext";

/* components */
import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Messages from "./components/Messages";
import NotFound from "./components/NotFound";

import "./App.css";

function App() {
  return (
    <Storage>
      <div className="App">
        <BrowserRouter history={history}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="messages" element={<Messages />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Storage>
  );
}

export default App;

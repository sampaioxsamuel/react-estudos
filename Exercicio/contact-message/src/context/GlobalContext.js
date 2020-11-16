import React from "react";

export const GlobalContext = React.createContext();

export const Storage = ({ children }) => {
  const [messages, setMessages] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <GlobalContext.Provider value={{ messages, setMessages }}>
      {children}
    </GlobalContext.Provider>
  );
};

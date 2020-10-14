import React from "react";
const Contato = React.lazy(() => import("./Contato"));

const App = () => {
  return (
    <div>
      <React.Suspense fallback={<div>Carregando...</div>}>
        <Contato />
      </React.Suspense>
    </div>
  );
};

export default App;

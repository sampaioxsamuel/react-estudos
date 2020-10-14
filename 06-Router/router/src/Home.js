import React from "react";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div>
      {/* <Head title="Inicio" description="essa é a home do site" /> */}
      <Helmet>
        <title>Site | Inicio</title>
        <meta name="description" content="essa é a home do site" />
      </Helmet>
      <h1>Home</h1>
      <p>isso é a Home</p>
    </div>
  );
};

export default App;

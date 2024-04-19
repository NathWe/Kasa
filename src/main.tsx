import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import { PageStyles } from "./main.style";

ReactDOM.render(
  <React.StrictMode>
    {/* Utilise le composant stylisé PageStyles autour de votre application */}
    <PageStyles>
      <App />
    </PageStyles>
  </React.StrictMode>,
  document.getElementById("root")
);

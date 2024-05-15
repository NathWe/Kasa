import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PageStyles } from "./main.style";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* Utilise le composant stylisé PageStyles autour de votre application */}
    <PageStyles>
      <App />
    </PageStyles>
  </React.StrictMode>
);

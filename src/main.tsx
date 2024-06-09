import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PageStyles } from "./main.style";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PageStyles>
      <App />
    </PageStyles>
  </React.StrictMode>
);

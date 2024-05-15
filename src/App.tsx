import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import pages
import Home from "./pages/Home/home";
import PageLogement from "./pages/Logements/PageLogement";
import Page404 from "./pages/Page404/Page404";
import Apropos from "./pages/APropos/Apropos";
//import components
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:logementId" element={<PageLogement />} />
          <Route path="/apropos" element={<Apropos />} />
          {/* si ne correspond à aucun chemin (path)*/}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.StrictMode>
  );
}

export default App;

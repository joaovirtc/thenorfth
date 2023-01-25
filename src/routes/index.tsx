import { Route, Routes, Router } from "react-router-dom";
import NavBar from "../components/navBar";
import Home from "../pages/home";
import Marketplace from "../pages/marketplace";
import UserPage from "../pages/userPage";
import CriarConta from "../pages/criarConta";

const Rotas = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<Marketplace />} path="/marketplace" />
        <Route element={<CriarConta />} path="/criarconta" />
      </Routes>
    </>
  );
};

export default Rotas;

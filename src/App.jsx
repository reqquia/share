import React from "react";

import { Home } from "./pages";
import { Login } from "./admin/auth/Login";
import { Reset } from "./admin/auth/Reset";
import { AjudaContato } from "./components/Helper/AjudaContato";
import { Termos } from "./components/Helper/Termos";
import { Privacidade } from "./components/Helper/Privacidade";
import { Register } from "./admin/auth/Register";
import { Dash } from "./admin/dashboard/index";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resetar-senha" element={<Reset />} />
      <Route path="/termos" element={<Termos />} />
      <Route path="/privacidade" element={<Privacidade />} />
      <Route path="/ajuda" element={<AjudaContato />} />
      <Route path="/dash" element={<Dash />} />
    </Routes>
  );
}

export default App;

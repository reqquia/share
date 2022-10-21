import React from "react";
import { Home } from "./pages";
import { Login } from "./admin/auth/Login";
import { Reset } from "./admin/auth/Reset";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetar-senha" element={<Reset />} />
    </Routes>
  );
}

export default App;

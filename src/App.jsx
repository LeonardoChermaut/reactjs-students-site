import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Students from "./pages/Student/index";
import Subjects from "./pages/Subject/Index";
import Home from "./pages/Home/Index";
import Navbar from "./components/Navbar/Index";
import Footer from "./components/Footer/Index";

import "./index.css";

function App() {
  return (
    <div className="MyDiv">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="alunos" element={<Students />} />
        <Route path="materias" element={<Subjects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Students from "./pages/Students/index";
import Subjects from "./pages/Subjects/Index";
import Home from "./pages/Home/Index";
import Navbar from "./components/Navbar/Index";
import Footer from "./components/Footer/Index";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="http://localhost:3000/" element={<Home />} />
        <Route path="alunos" element={<Students />} />
        <Route path="materias" element={<Subjects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Students from "./pages/Student/index";
import Subjects from "./pages/Subject/Index";
import Home from "./pages/Home/Index";
import Navbar from "./components/Navbar/Index";
import Footer from "./components/Footer/Index";
import "./index.css";
import NotFound from "./pages/NotFound/Index";
import { ThemeContext } from "./context";
import { useContext } from "react";

function App() {
  const { selectedTheme } = useContext(ThemeContext);

  const theme = {
    light: {
      backgroundColor: '#fff',
      color: "#202225"
    },
    dark: {
      backgroundColor: '#202225',
      color: "#fff"
    },
  };

  return (
      <div className="MyDiv" style={theme[selectedTheme]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="alunos" element={<Students />} />
          <Route path="materias" element={<Subjects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
  );
};

export default App;